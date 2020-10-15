from django.core.serializers import get_serializer
from django.shortcuts import render
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated

from rest_framework.response import Response

from apps.posts.models import Post
from apps.posts.permissions import IsAuthorOrReadOnly
from apps.posts.serializers import PostSerializer, PostSmallSerializer


class ListCreatePostAPIView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSmallSerializer
    permission_classes = [IsAuthorOrReadOnly]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(author=request.user)
        #post = Post.objects.get(pk=serializer.data.get('id'))
        #detailed_serializer = CookbookDetailSerializer(cookbook)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class RetrieveUpdateDestroyPostAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthorOrReadOnly]
    lookup_field = 'id'


class ToggleFavoriteView(GenericAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'id'

    def patch(self, request, *args, **kwargs):
        obj = self.get_object()
        if request.user in obj.fans_of_post.all():
            obj.fans_of_post.remove(request.user)
        else:
            obj.fans_of_post.add(request.user)
        #obj.like_count = len(obj.fans_of_post.all())
        serializer = self.get_serializer(obj, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        obj.save()
        return Response(serializer.data)


class ShowLikedPosts(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.request.user.liked_posts.all()

    #def get(self, request, *args, **kwargs):
        #queryset = self.get_queryset()
        #daset = queryset.filter(fans_of_post=request.user)
        #serializer = self.get_serializer(daset, many=True)
        #return Response(serializer.data)


class ShowPostOfGivenUser(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'pk'
    permission_classes = []

    class Meta:
        ordering = ["id"]

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(author=kwargs['pk'])
        detailed_serializer = PostSmallSerializer(queryset, many=True)
        return Response(detailed_serializer.data)


class ShowPostsOfFollowing(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = []

    def get(self, request, *args, **kwargs):
        array = []
        testqueryset = request.user.followees.values()
        for ids in testqueryset:
            array.append(ids['id'])
        queryset = self.get_queryset().filter(author__in=array)
        detailed_serializer = PostSmallSerializer(queryset, many=True)
        return Response(detailed_serializer.data)

from django.contrib.auth import get_user_model
from django.core.mail import send_mail

from rest_framework.generics import ListCreateAPIView, GenericAPIView, RetrieveAPIView, RetrieveUpdateAPIView
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password

from apps.posts.permissions import IsAuthorOrReadOnly
from apps.users.serializers import UserSerializer, UserSerializerSmall

User = get_user_model()


class ListCertainUser(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []
    lookup_field = 'id'


class RetrieveUpdateLoggedInUser(RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []

    def get_object(self):
        return self.request.user


class ListCreateUserAPIView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []

    def perform_create(self, serializer):
        serializer.save(password=make_password(self.request.data['password']))


class FollowUserView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []
    lookup_field = 'id'

    def patch(self, request, *args, **kwargs):
        obj = self.get_object()
        user = request.user
        if user.id != kwargs['id']:
            if user in obj.followers.all():
                obj.followers.remove(user)
            else:
                obj.followers.add(user)
        serializer = self.get_serializer(obj, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        send_mail(
            'New Follower bro',
            'You are being followed',
            'jslabdara@gmail.com',
            ['{}'.format(obj.user.email)],
            fail_silently=False,
        )
        obj.save()
        return Response(serializer.data)


class GetAllFollowers(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializerSmall
    permission_classes = []

    def get_object(self):
        return self.request.user.followers.all()


class GetAllFollowees(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializerSmall
    permission_classes = []

    def get_object(self):
        return self.request.user.followees.all()

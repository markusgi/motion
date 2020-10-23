from django.contrib.auth import get_user_model
from django.core.serializers import get_serializer
from django.shortcuts import render
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView, ListAPIView, \
    CreateAPIView
from rest_framework.permissions import IsAuthenticated

from rest_framework.response import Response

from apps.friends.models import FriendRequest
from apps.friends.serializers import FriendRequestSerializer

from apps.friends.serializers import UserFriendsSerializer

User = get_user_model()


class ListFriendsAPIView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserFriendsSerializer
    permission_classes = []

    def get_object(self):
        return self.request.user.friend_to_user.all()


class NewFriendRequestAPIView(CreateAPIView):
    queryset = FriendRequest.objects.all()
    serializer_class = FriendRequestSerializer
    permission_classes = []
    lookup_field = 'user_id'

    #def post(self, request, *args, **kwargs):


class RetrieveUpdateDestroyFriendRequestAPIView(RetrieveUpdateDestroyAPIView):
    queryset = FriendRequest.objects.all()
    serializer_class = FriendRequestSerializer
    permission_classes = []
    lookup_field = 'id'

    def patch(self, request, *args, **kwargs):
        obj = self.get_object()
        user = request.user
        if user.id != kwargs['friend_request_id']:
            if user in obj.friend_to_user.all():
                obj.friend_to_user.remove(user)
            else:
                obj.friend_to_user.add(user)
        serializer = self.get_serializer(obj, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        obj.save()
        return Response(serializer.data)

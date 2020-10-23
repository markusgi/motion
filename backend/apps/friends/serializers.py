from django.contrib.auth import get_user_model
from rest_framework import serializers

from apps.friends.models import FriendRequest

User = get_user_model()


class FriendRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = FriendRequest
        fields = "__all__"


class UserFriendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


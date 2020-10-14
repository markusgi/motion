from django.contrib.auth import get_user_model
from rest_framework import serializers

from apps.posts.models import Post

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'friends']


class PostSerializer(serializers.ModelSerializer):
    #user = UserSerializer

    likes_counter = serializers.SerializerMethodField()

    def get_likes_counter(self, post):
        return post.fans_of_post.all().count()

    class Meta:
        model = Post
        fields = "__all__"
        read_only_fields = ['like_count']


class PostSmallSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["id", "title", "author"]

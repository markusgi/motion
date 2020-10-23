from django.urls import path

from apps.friends.views import ListFriendsAPIView, NewFriendRequestAPIView, RetrieveUpdateDestroyFriendRequestAPIView

urlpatterns = [
    path('', ListFriendsAPIView.as_view()),
    path('requests/<int:user_id', NewFriendRequestAPIView.as_view()),
    path('requests/<int:id>/', RetrieveUpdateDestroyFriendRequestAPIView.as_view()),
]
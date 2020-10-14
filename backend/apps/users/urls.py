from django.urls import path

from apps.users.views import GetAllFollowers, FollowUserView, GetAllFollowees

urlpatterns = [
    path('toggle-follow/<int:id>/', FollowUserView.as_view()), # POST: toggle follow/unfollow a user
    path('followers/', GetAllFollowers.as_view()), #GET: list of all the followers
    path('following/', GetAllFollowees.as_view()), #GET: list of all the people the user is following
]

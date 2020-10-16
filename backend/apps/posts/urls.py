from django.urls import path

from apps.posts.views import ListCreatePostAPIView, ShowPostsOfFollowing, ShowPostOfMe, RetrieveUpdateDestroyPostAPIView, ToggleFavoriteView, ShowLikedPosts, ShowPostOfGivenUser

urlpatterns = [
    path('', ListCreatePostAPIView.as_view()),
    path('<int:id>/', RetrieveUpdateDestroyPostAPIView.as_view()),
    path('toggle-like/<int:id>/', ToggleFavoriteView.as_view()),
    path('likes/', ShowLikedPosts.as_view()),
    path('following/', ShowPostsOfFollowing.as_view()),
    path('user/<int:pk>/', ShowPostOfGivenUser.as_view()),
    path('me/', ShowPostOfMe.as_view()),
]
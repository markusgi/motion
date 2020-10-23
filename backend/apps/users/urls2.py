from django.urls import path

from apps.users.views import ListCreateUserAPIView

from apps.users.views import RetrieveUpdateLoggedInUser, ListCertainUser

urlpatterns = [
    path('', ListCreateUserAPIView.as_view()),
    path('<int:id>/', ListCertainUser.as_view()),
    path('me/', RetrieveUpdateLoggedInUser.as_view()),
]

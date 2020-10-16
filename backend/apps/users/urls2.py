from django.urls import path

from apps.users.views import ListCreateUserAPIView

from apps.users.views import RetrieveLoggedInUser, ListCertainUser

urlpatterns = [
    path('', ListCreateUserAPIView.as_view()),
    path('<int:id>/', ListCertainUser.as_view()),
    path('me/', RetrieveLoggedInUser.as_view()),
]

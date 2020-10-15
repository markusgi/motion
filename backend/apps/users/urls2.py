from django.urls import path

from apps.users.views import ListCreateUserAPIView

from apps.users.views import ListLogedInUser

urlpatterns = [
    path('', ListCreateUserAPIView.as_view()),
    path('<int:id>/', ListLogedInUser.as_view()),
]

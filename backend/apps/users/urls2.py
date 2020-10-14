from django.urls import path

from apps.users.views import ListCreateUserAPIView

urlpatterns = [
    path('', ListCreateUserAPIView.as_view()),
]

from django.contrib.auth.models import AbstractUser
from django.db import models

from django.conf import settings


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'password']


    email = models.EmailField(unique=True)
    followers = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name="followees", blank=True)

    def __str__(self):
        return f'{self.email}'

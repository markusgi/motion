from django.db import models
from django.conf import settings


class FriendRequest(models.Model):
    status = models.BooleanField(default=0)
    requester = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name="fr_requester")
    receiver = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name="fr_receiver")

    def __str__(self):
        return f'{self.status}: from {self.requester} to {self.receiver}'



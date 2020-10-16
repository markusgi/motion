from django.conf import settings
from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=60, blank=True)
    text_content = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='posts_from_this_user', on_delete=models.CASCADE, null=True)
    fans_of_post = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='liked_posts', blank=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return f'Post {self.pk}: {self.title}'

from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Post(models.Model):
    title = models.CharField(max_length=60)
    text_content = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(to=User, related_name='posts_a', on_delete=models.CASCADE, null=True)
    fans_of_post = models.ManyToManyField(to=User, related_name='liked_posts', blank=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return f'Post {self.pk}: {self.title}'

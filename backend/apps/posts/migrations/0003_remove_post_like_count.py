# Generated by Django 3.1.2 on 2020-10-09 15:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_auto_20201009_1630'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='like_count',
        ),
    ]

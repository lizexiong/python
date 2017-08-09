# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-08 12:31
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='friends',
            field=models.ManyToManyField(related_name='_userprofile_friends_+', to='web.UserProfile'),
        ),
    ]

# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-07-02 06:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app01', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userinfo',
            name='memo',
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='pwd',
            field=models.CharField(max_length=32),
        ),
    ]

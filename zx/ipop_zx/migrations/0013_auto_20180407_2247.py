# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-04-07 14:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ipop_zx', '0012_auto_20180407_2153'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usedip',
            name='group',
            field=models.CharField(default=12, max_length=32),
            preserve_default=False,
        ),
    ]
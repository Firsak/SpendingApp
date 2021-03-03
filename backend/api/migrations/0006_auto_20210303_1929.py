# Generated by Django 3.1.6 on 2021-03-03 19:29

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20210303_1927'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='payment',
            name='name',
        ),
        migrations.RemoveField(
            model_name='transaction',
            name='name',
        ),
        migrations.AlterField(
            model_name='payment',
            name='addedAt',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2021, 3, 3, 19, 29, 10, 742983, tzinfo=utc), null=True),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='addedAt',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2021, 3, 3, 19, 29, 10, 742656, tzinfo=utc), null=True),
        ),
    ]

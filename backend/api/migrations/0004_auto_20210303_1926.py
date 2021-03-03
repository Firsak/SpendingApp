# Generated by Django 3.1.6 on 2021-03-03 19:26

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210303_1924'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paymant',
            name='addedAt',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2021, 3, 3, 19, 26, 32, 316675, tzinfo=utc), null=True),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='addedAt',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2021, 3, 3, 19, 26, 32, 316305, tzinfo=utc), null=True),
        ),
    ]

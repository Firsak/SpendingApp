# Generated by Django 3.1.6 on 2021-03-03 19:23

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paymant',
            name='addedAt',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2021, 3, 3, 19, 23, 43, 902529, tzinfo=utc), null=True),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='addedAt',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2021, 3, 3, 19, 23, 43, 902211, tzinfo=utc), null=True),
        ),
    ]

# Generated by Django 3.1.6 on 2021-03-03 19:22

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('description', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Salary',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('description', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Wallet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('description', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('addedAt', models.DateTimeField(blank=True, default=datetime.datetime(2021, 3, 3, 19, 22, 46, 947182), null=True)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=7)),
                ('salary', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.salary')),
                ('wallet', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.wallet')),
            ],
        ),
        migrations.CreateModel(
            name='Paymant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('addedAt', models.DateTimeField(blank=True, default=datetime.datetime(2021, 3, 3, 19, 22, 46, 947539), null=True)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=7)),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.category')),
                ('wallet', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.wallet')),
            ],
        ),
    ]

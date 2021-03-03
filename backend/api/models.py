from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
from django.utils import timezone

# Create your models here.


class Category(models.Model):
    # user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    # icon =
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name


class Wallet(models.Model):
    # user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    # icon =
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name


class Salary(models.Model):
    # user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    # icon =
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name


class Transaction(models.Model):
    # user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    salary = models.ForeignKey(Salary, on_delete=models.SET_NULL, null=True)
    wallet = models.ForeignKey(Wallet, on_delete=models.SET_NULL, null=True)
    # icon =
    description = models.TextField(null=True, blank=True)
    addedAt = models.DateTimeField(default=timezone.now(), null=True, blank=True)
    amount = models.DecimalField(max_digits=7, decimal_places=2)

    def __str__(self):
        return self.salary.name + ' -> ' + self.wallet.name


class Payment(models.Model):
    # user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    wallet = models.ForeignKey(Wallet, on_delete=models.SET_NULL, null=True)
    # icon =
    description = models.TextField(null=True, blank=True)
    addedAt = models.DateTimeField(default=timezone.now(), null=True, blank=True)
    amount = models.DecimalField(max_digits=7, decimal_places=2)

    def __str__(self):
        return self.salary.name + ' -> ' + self.wallet.name
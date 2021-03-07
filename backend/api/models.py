from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
from django.utils import timezone

# Create your models here.


class Category(models.Model):
    # user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    icon = models.CharField(max_length=200, null=True, blank=True, default="bi bi-file")
    type = models.CharField(max_length=200, null=True, blank=True)
    amount = models.DecimalField(max_digits=7, decimal_places=2, default=0)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name



class Transaction(models.Model):
    # user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    categoryFrom = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name="categoryFrom")
    categoryTo = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, related_name="categoryTo")
    description = models.TextField(null=True, blank=True, default='')
    addedAt = models.DateTimeField(default=timezone.now(), null=True, blank=True)
    amount = models.DecimalField(max_digits=7, decimal_places=2, default=0)

    def __str__(self):
        return self.categoryFrom.name + ' -> ' + self.categoryTo.name + '   ' + str(self.amount)

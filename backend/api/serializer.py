from rest_framework import serializers
from django.db.models import Q
from django.contrib.auth.models import User
from .models import Category, Transaction


class TransactionSerializer(serializers.ModelSerializer):
    fromId = serializers.SerializerMethodField(read_only=True)
    toId = serializers.SerializerMethodField(read_only=True)
    fromName = serializers.SerializerMethodField(read_only=True)
    toName = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Transaction
        fields = ['id', 'fromId', 'toId', 'fromName', 'toName', 'amount', 'description']

    def get_fromId(self, obj):
        if obj.categoryFrom:
            return obj.categoryFrom.id
        else:
            return -1

    def get_toId(self, obj):
        if obj.categoryTo:
            return obj.categoryTo.id
        else:
            return -1

    def get_fromName(self, obj):
        if obj.categoryFrom:
            return obj.categoryFrom.name
        else:
            return "DELETED"

    def get_toName(self, obj):
        if obj.categoryTo:
            return obj.categoryTo.name
        else:
            return "DELETED"


class CategorySerializer(serializers.ModelSerializer):
    transactions = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Category
        fields = '__all__'

    def get_transactions(self, obj):
        transactionsFrom = obj.categoryFrom.all()
        transactionsTo = obj.categoryTo.all()
        transactions = transactionsFrom.union(transactionsTo)
        serializer = TransactionSerializer(transactions, many=True)
        return serializer.data

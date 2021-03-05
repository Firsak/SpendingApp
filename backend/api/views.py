from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from datetime import datetime

from rest_framework import status

from .models import Category, Transaction
from .serializer import CategorySerializer, TransactionSerializer

# Create your views here.


@api_view(['GET'])
def apiInfo(request):

    urls = {
        'api': 'api/',
        'getInfo': 'api/info/',

        'addCategory': 'api/addcategory/',
        'changeCategory': 'api/changecategory/<str:pk>/',
        'deleteCategory': 'api/deletecategory/<str:pk>/',

        'makeTransaction': 'api/maketransaction/',
        'changeTransaction': 'api/changetransaction/<str:pk>/',
        'deleteTransaction': 'api/deletetransaction/<str:pk>/',

    }

    return Response(urls, status=status.HTTP_200_OK)


@api_view(['GET'])
def getCategories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getCategory(request, pk):
    category = Category.objects.get(id=pk)
    serializer = CategorySerializer(category, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getTransactions(request):
    transactions = Transaction.objects.all()
    serializer = TransactionSerializer(transactions, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getTransaction(request, pk):
    transaction = Transaction.objects.get(id=pk)
    serializer = TransactionSerializer(transaction, many=False)
    return Response(serializer.data)

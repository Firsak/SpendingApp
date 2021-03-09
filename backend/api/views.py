from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from datetime import datetime
import decimal

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


@api_view(['DELETE'])
def deleteCategory(request, pk):
    category = Category.objects.get(id=pk)
    category.delete()
    return Response('Category deleted')


@api_view(['POST'])
def createCategory(request):
    data = request.data

    category = Category.objects.create(
        name=data['name'],
        icon=data['icon'],
        type=data['type'],
        amount=data['amount'],
        description=data['description']
    )

    return Response('Category created')


@api_view(['PUT'])
def updataCategory(request, pk):

    data = request.data
    category = Category.objects.get(id=pk)

    category.name = data['name']
    category.icon = data['icon']
    category.type = data['type']
    category.amount = data['amount']
    category.description = data['description']

    category.save()

    return Response('Category updated')


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


@api_view(['POST'])
def createTransaction(request):
    data = request.data
    pkFrom = data["pkFrom"]
    pkTo = data["pkTo"]
    categoryFrom = Category.objects.get(id=pkFrom)
    categoryTo = Category.objects.get(id=pkTo)

    if data['amount'] == 0:
        content = {'details': 'Please, select the amount of money'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    else:
        transaction = Transaction.objects.create(
            categoryFrom = categoryFrom,
            categoryTo = categoryTo,
            description = data['description'],
            addedAt = data['addedAt'],
            amount = data['amount'],
        )

        print(type(transaction.amount))
        categoryFrom.amount -= decimal.Decimal(transaction.amount)
        categoryTo.amount += decimal.Decimal(transaction.amount)

        categoryFrom.save()
        categoryTo.save()

        return Response('Transaction added')
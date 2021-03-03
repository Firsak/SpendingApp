from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from datetime import datetime

from rest_framework import status

# Create your views here.


@api_view(['GET'])
def apiInfo(request):

    urls = {
        'api': 'api/',
        'getInfo': 'api/info/',

        'addCategory': 'api/addcategory/',
        'changeCategory': 'api/changecategory/<str:pk>/',
        'deleteCategory': 'api/deletecategory/<str:pk>/',

        'addSalary': 'api/addsalary',
        'changeSalary': 'api/changesalary/<str:pk>/',
        'deleteSalary': 'api/deletesalary/<str:pk>/',

        'addWallet': 'api/addwallet/',
        'changeWallet': 'api/changewallet/<str:pk>/',
        'deleteWallet': 'api/deletewallet/<str:pk>/',

        'makeTransaction': 'api/maketransaction/',
        'changeTransaction': 'api/changetransaction/<str:pk>/',
        'deleteTransaction': 'api/deletetransaction/<str:pk>/',

        'makePayment': 'api/makepayment/',
        'changePayment': 'api/makepayment/<str:pk>/',
        'deletePayment': 'api/makepayment/<str:pk>/',

    }

    return Response(urls, status=status.HTTP_200_OK)
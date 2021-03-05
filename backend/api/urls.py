from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.apiInfo, name='api-info'),
    path('categories/', views.getCategories, name='get-categories'),
    path('transactions/', views.getTransactions, name='get-transactions'),

    path('categories/<str:pk>/', views.getCategory, name='get-category'),
    path('transactions/<str:pk>/', views.getTransaction, name='get-transaction'),
]
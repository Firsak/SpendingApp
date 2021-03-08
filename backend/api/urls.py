from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.apiInfo, name='api-info'),
    path('categories/', views.getCategories, name='get-categories'),
    path('transactions/', views.getTransactions, name='get-transactions'),

    path('categories/create/', views.createCategory, name='create-category'),
    path('categories/update/<str:pk>/', views.updataCategory, name='update-category'),
    path('categories/delete/<str:pk>/', views.deleteCategory, name='delete-category'),

    path('transactions/create/<str:pkFrom>/<str:pkTo>/', views.createTransaction, name='create-transaction'),

    path('categories/<str:pk>/', views.getCategory, name='get-category'),
    path('transactions/<str:pk>/', views.getTransaction, name='get-transaction'),
]
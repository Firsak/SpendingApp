from django.urls import path, include
from api import views

urlpatterns = [
    path('', views.apiInfo, name='api-info')
]
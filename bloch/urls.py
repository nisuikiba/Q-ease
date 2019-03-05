from django.urls import path
from . import views

urlpatterns = [
    path('index/', views.index, name='index'),
    path('index_ja/', views.jaview, name='jaview'), 
    path('try/', views.tryview, name='tryview'), 
    path('challenge/', views.challengeview, name='challengeview'),
    path('draw/', views.tryview, name='drawview'), 
]

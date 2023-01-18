from django.urls import path 
from .views import home, mostrar, eliminar

urlpatterns=[
    path('', home, name="home"),
    path('mostrar/', mostrar, name="mostrar"),
    path('eliminar/<id>', eliminar, name="eliminar"),
    #invocar otros path por cada views
]
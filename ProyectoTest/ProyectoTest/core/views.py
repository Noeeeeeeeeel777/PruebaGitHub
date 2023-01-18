from django.shortcuts import render, redirect
from .models import Vehiculo

# Create your views here.
def home(request):
    return render(request, 'index.html')

def mostrar(request):
    vehiculos = Vehiculo.objects.all()
    datos={
        'carros':vehiculos
    }
    return render(request, 'mostrar.html', datos)

def eliminar(request, id):
    vehiculo = Vehiculo.objects.get(patente=id)
    vehiculo.delete()
    return redirect('mostrar')


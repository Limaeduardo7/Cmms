# cmms/urls.py
from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from inventory.views import home_view

def home(request):
    return HttpResponse("Bem-vindo ao Sistema de Gestão CMMS!")

urlpatterns = [
    path('api/', include('inventory.urls')),
    path('', home_view, name='home'),    
    path('admin/', admin.site.urls),
    path('maintenance/', include('maintenance.urls')),  # Certifique-se de que está correto
    path('inventory/', include('inventory.urls'))
    
]

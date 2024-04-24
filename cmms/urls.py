from django.contrib import admin
from django.urls import path, include
from inventory.views import home_view  # 'home' view parece não ser mais necessária

urlpatterns = [
    path('', home_view, name='home'),  # Rota home principal usando 'home_view'
    path('admin/', admin.site.urls),  # Admin do Django
    path('api/inventory/', include(('inventory.urls', 'inventory'), namespace='inventory-api')),  # API sob namespace
    path('inventory/', include(('inventory.urls', 'inventory'), namespace='inventory')),  # Uso geral do inventory
    path('maintenance/', include(('maintenance.urls', 'maintenance'), namespace='maintenance')),  # Uso geral do maintenance
]

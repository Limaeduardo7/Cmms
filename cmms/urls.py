from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from inventory.views import home_view  # 'home' view parece não ser mais necessária

if settings.DEBUG:
    import debug_toolbar

urlpatterns = [
    path('__debug__/', include(debug_toolbar.urls)),
    path('', home_view, name='home'),  # Rota home principal usando 'home_view'
    path('admin/', admin.site.urls),  # Admin do Django
    path('api/inventory/', include(('inventory.urls', 'inventory'), namespace='inventory-api')),  # API sob namespace
    path('api/maintenance/', include('maintenance.urls')),  # Incluir URLs do aplicativo 'maintenance' com prefixo 'api/maintenance/'    
    path('inventory/', include(('inventory.urls', 'inventory'), namespace='inventory')),  # Uso geral do inventory
    path('maintenance/', include(('maintenance.urls', 'maintenance'), namespace='maintenance')),  # Uso geral do maintenance
]

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    AssetListView, AssetDetailView, AssetUpdateView, AssetCreateView, AssetDeleteView,
    CategoryListView, InventoryAssetViewSet
)

# Configuração do Router para o Django REST Framework
router = DefaultRouter()
router.register(r'assets', InventoryAssetViewSet, basename='inventoryasset')

app_name = 'inventory_tools'  # Definindo o namespace do aplicativo

urlpatterns = [
    # URLs para as views baseadas em classes do Django para renderização de templates HTML
    path('api/', include(router.urls)),  # Adiciona todas as URLs para operações CRUD no InventoryAsset
    path('assets/', AssetListView.as_view(), name='asset-list'),
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('assets/<int:pk>/', AssetDetailView.as_view(), name='asset-detail'),
    path('assets/<int:pk>/edit/', AssetUpdateView.as_view(), name='asset-edit'),
    path('assets/new/', AssetCreateView.as_view(), name='asset-new'),
    path('assets/<int:pk>/delete/', AssetDeleteView.as_view(), name='asset-delete'),

    # URL para incluir as URLs da API RESTful configuradas pelo Django REST Framework's router
    path('api/', include(router.urls)),  # Adiciona as URLs do viewset à base 'api/'
]

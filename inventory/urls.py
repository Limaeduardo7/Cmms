# inventory/urls.py
from django.urls import path
from .views import AssetListView, AssetDetailView, AssetUpdateView, AssetCreateView, AssetDeleteView, CategoryListView

app_name = 'inventory'  # Definindo o namespace do aplicativo

urlpatterns = [
    path('assets/', AssetListView.as_view(), name='asset-list'),
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('assets/<int:pk>/', AssetDetailView.as_view(), name='asset-detail'),
    path('assets/<int:pk>/edit/', AssetUpdateView.as_view(), name='asset-edit'),
    path('assets/new/', AssetCreateView.as_view(), name='asset-new'),
    path('assets/<int:pk>/delete/', AssetDeleteView.as_view(), name='asset-delete'),
]

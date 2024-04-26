from django.views.generic import ListView, DetailView, UpdateView, CreateView, DeleteView
from .models import Category, InventoryAsset
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import InventoryAssetSerializer
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated



class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class InventoryAssetViewSet(viewsets.ModelViewSet):
    queryset = InventoryAsset.objects.all()
    serializer_class = InventoryAssetSerializer
    pagination_class = StandardResultsSetPagination
    permission_classes = [IsAuthenticated]


class CategoryListView(ListView):
    model = Category
    template_name = 'templates/inventory/category_list.html'

class AssetListView(ListView):
    model = InventoryAsset
    template_name = 'templates/inventory/asset_list.html'
    context_object_name = 'assets'

class AssetDetailView(DetailView):
    model = InventoryAsset
    template_name = 'templates/inventory/asset_detail.html'

class AssetUpdateView(UpdateView):
    model = InventoryAsset
    fields = ['nome', 'categoria', 'status', 'data_aquisicao', 'custo_aquisicao', 'valor_atual', 'fornecedor', 'numero_serie', 'informacoes_garantia', 'responsavel', 'proxima_manutencao', 'notas']
    template_name = 'inventory/asset_form.html'
    success_url = '/inventory/assets/'

class AssetCreateView(CreateView):
    model = InventoryAsset
    fields = ['nome', 'categoria', 'status', 'data_aquisicao', 'custo_aquisicao', 'valor_atual', 'fornecedor', 'numero_serie', 'informacoes_garantia', 'responsavel', 'proxima_manutencao', 'notas']
    template_name = 'inventory/asset_form.html'
    success_url = '/inventory/assets/'
    def form_valid(self, form):
        # Lógica adicional antes de salvar o objeto, se necessário
        return super().form_valid(form)

class AssetDeleteView(DeleteView):
    model = InventoryAsset
    template_name = 'inventory/asset_confirm_delete.html'
    success_url = '/inventory/assets/'

def home_view(request):
    return render(request, 'home.html')
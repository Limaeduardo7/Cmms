# inventory/views.py
from django.views.generic import ListView, DetailView, UpdateView, CreateView, DeleteView
from .models import Asset, Category
from django.shortcuts import render

class CategoryListView(ListView):
    model = Category
    template_name = 'inventory/category_list.html'

class AssetListView(ListView):
    model = Asset
    template_name = 'inventory/asset_list.html'
    context_object_name = 'assets'

class AssetDetailView(DetailView):
    model = Asset
    template_name = 'inventory/asset_detail.html'

class AssetUpdateView(UpdateView):
    model = Asset
    fields = ['nome', 'categoria', 'status', 'data_aquisicao', 'custo_aquisicao', 'valor_atual', 'fornecedor', 'numero_serie', 'informacoes_garantia', 'responsavel', 'proxima_manutencao', 'notas']
    template_name = 'inventory/asset_form.html'
    success_url = '/inventory/assets/'

class AssetCreateView(CreateView):
    model = Asset
    fields = ['nome', 'categoria', 'status', 'data_aquisicao', 'custo_aquisicao', 'valor_atual', 'fornecedor', 'numero_serie', 'informacoes_garantia', 'responsavel', 'proxima_manutencao', 'notas']
    template_name = 'inventory/asset_form.html'
    success_url = '/inventory/assets/'

class AssetDeleteView(DeleteView):
    model = Asset
    template_name = 'inventory/asset_confirm_delete.html'
    success_url = '/inventory/assets/'

def home_view(request):
    return render(request, 'home.html')
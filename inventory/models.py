# inventory/models.py
from django.db import models
from django.utils import timezone

class Asset(models.Model):
    nome = models.CharField(max_length=200)
    categoria = models.CharField(max_length=100)
    status = models.CharField(max_length=50)
    data_aquisicao = models.DateField()
    custo_aquisicao = models.DecimalField(max_digits=10, decimal_places=2)
    valor_atual = models.DecimalField(max_digits=10, decimal_places=2)
    fornecedor = models.CharField(max_length=200)
    numero_serie = models.CharField(max_length=200)
    informacoes_garantia = models.TextField()
    responsavel = models.CharField(max_length=100)
    proxima_manutencao = models.DateField()
    notas = models.TextField()

class Category(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    ativo = models.BooleanField(default=True)

class Responsible(models.Model):
    telefone = models.CharField(max_length=20)
    ativo = models.BooleanField(default=True)
    departamento = models.CharField(max_length=100)
    nome = models.CharField(max_length=100)
    cargo = models.CharField(max_length=100)
    email = models.EmailField()    

class InventoryAsset(models.Model):
    nome = models.CharField(max_length=255)
    categoria = models.CharField(max_length=255)
    # Adicione mais campos conforme necessário

    class Meta:
        db_table = 'inventory_inventory_asset'  # Tabela única para InventoryAsset

    def __str__(self):
        return f"{self.nome} - {self.departamento}"
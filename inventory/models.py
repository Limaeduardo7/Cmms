# inventory/models.py
from django.db import models
from datetime import date
from django.utils import timezone

class InventoryAsset(models.Model):
    nome = models.CharField(max_length=200)
    categoria = models.CharField(max_length=100)
    status = models.CharField(max_length=50, default='ativo')  # Adicionando um valor padrão
    data_aquisicao = models.DateField(default=date.today)
    custo_aquisicao = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    valor_atual = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    fornecedor = models.CharField(max_length=200, default='Desconhecido')
    numero_serie = models.CharField(max_length=200, default='N/A')
    informacoes_garantia = models.TextField(default='Nenhuma')
    responsavel = models.CharField(max_length=100, default='Nenhum')
    proxima_manutencao = models.DateField(default=date.today)
    notas = models.TextField(default='Sem notas')

    class Meta:
        db_table = 'inventory_asset'

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


    def __str__(self):
        return f"{self.nome} - {self.departamento}"
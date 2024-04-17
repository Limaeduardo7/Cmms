# maintenance/models.py
from django.db import models
from inventory.models import Asset
from django.utils import timezone

class Responsible(models.Model):
    name = models.CharField(max_length=255)
    department = models.CharField(max_length=255)

class MaintenanceSchedule(models.Model):
    data_agendamento = models.DateField()
    hora_agendamento = models.TimeField()
    tipo_manutencao = models.CharField(max_length=100)
    status = models.CharField(max_length=50)
    responsavel = models.CharField(max_length=100)
    ativo_relacionado = models.ForeignKey(Asset, on_delete=models.CASCADE)
    detalhes = models.TextField()
    notas = models.TextField()

class WorkOrder(models.Model):
    descricao = models.TextField()
    tipo_manutencao = models.CharField(max_length=100)
    status = models.CharField(max_length=50)
    data_criacao = models.DateField(default=timezone.now)
    data_agendamento = models.DateField()
    data_conclusao = models.DateField(null=True, blank=True)
    prioridade = models.CharField(max_length=50)
    responsavel = models.CharField(max_length=100)
    ativo_relacionado = models.ForeignKey(Asset, on_delete=models.CASCADE)
    custo_estimado = models.DecimalField(max_digits=10, decimal_places=2)
    custo_real = models.DecimalField(max_digits=10, decimal_places=2)
    notas = models.TextField()
    anexos = models.JSONField(blank=True, null=True)  # Armazena como JSON
    historico = models.JSONField(blank=True, null=True)  # Armazena como JSON

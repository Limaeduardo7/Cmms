# Generated by Django 4.1.13 on 2024-04-17 17:04

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('inventory', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Responsible',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('department', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='WorkOrder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('descricao', models.TextField()),
                ('tipo_manutencao', models.CharField(max_length=100)),
                ('status', models.CharField(max_length=50)),
                ('data_criacao', models.DateField(default=django.utils.timezone.now)),
                ('data_agendamento', models.DateField()),
                ('data_conclusao', models.DateField(blank=True, null=True)),
                ('prioridade', models.CharField(max_length=50)),
                ('responsavel', models.CharField(max_length=100)),
                ('custo_estimado', models.DecimalField(decimal_places=2, max_digits=10)),
                ('custo_real', models.DecimalField(decimal_places=2, max_digits=10)),
                ('notas', models.TextField()),
                ('anexos', models.JSONField(blank=True, null=True)),
                ('historico', models.JSONField(blank=True, null=True)),
                ('ativo_relacionado', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='inventory.asset')),
            ],
        ),
        migrations.CreateModel(
            name='MaintenanceSchedule',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_agendamento', models.DateField()),
                ('hora_agendamento', models.TimeField()),
                ('tipo_manutencao', models.CharField(max_length=100)),
                ('status', models.CharField(max_length=50)),
                ('responsavel', models.CharField(max_length=100)),
                ('detalhes', models.TextField()),
                ('notas', models.TextField()),
                ('ativo_relacionado', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='inventory.asset')),
            ],
        ),
    ]

# maintenance/views.py
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import MaintenanceSchedule, WorkOrder, Responsible

class ResponsibleListView(ListView):
    model = Responsible
    template_name = 'maintenance/responsible_list.html'  # Assegure-se de que este template existe
    context_object_name = 'responsibles'  # Opcional, define o nome do contexto no template

class WorkOrderListView(ListView):
    model = WorkOrder
    template_name = 'templates/maintenance/work_order_list.html'  # Nome do template que você usará para exibir a lista

# View para listar todos os agendamentos de manutenção
class MaintenanceScheduleListView(ListView):
    model = MaintenanceSchedule
    template_name = 'maintenance/maintenance_schedule_list.html'

# View para detalhes do agendamento de manutenção
class MaintenanceScheduleDetailView(DetailView):
    model = MaintenanceSchedule
    template_name = 'maintenance/maintenance_schedule_detail.html'

# View para criar um novo agendamento de manutenção
class MaintenanceScheduleCreateView(CreateView):
    model = MaintenanceSchedule
    fields = '__all__'
    template_name = 'maintenance/maintenance_schedule_form.html'
    success_url = reverse_lazy('maintenance:maintenance_schedule_list')

# View para atualizar um agendamento de manutenção
class MaintenanceScheduleUpdateView(UpdateView):
    model = MaintenanceSchedule
    fields = '__all__'
    template_name = 'maintenance/maintenance_schedule_form.html'
    success_url = reverse_lazy('maintenance:maintenance_schedule_list')

# View para deletar um agendamento de manutenção
class MaintenanceScheduleDeleteView(DeleteView):
    model = MaintenanceSchedule
    template_name = 'maintenance/maintenance_schedule_confirm_delete.html'
    success_url = reverse_lazy('maintenance:maintenance_schedule_list')

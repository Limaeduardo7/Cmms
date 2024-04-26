# maintenance/views.py
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import MaintenanceSchedule, WorkOrder, Responsible
from .serializers import ResponsibleSerializer
from rest_framework.generics import ListAPIView

# Views tradicionais para renderizar páginas HTML
class MaintenanceScheduleListView(ListView):
    model = MaintenanceSchedule
    template_name = 'maintenance/maintenance_schedule_list.html'

class MaintenanceScheduleDetailView(DetailView):
    model = MaintenanceSchedule
    template_name = 'maintenance/maintenance_schedule_detail.html'

class MaintenanceScheduleCreateView(CreateView):
    model = MaintenanceSchedule
    fields = '__all__'
    template_name = 'maintenance/maintenance_schedule_form.html'
    success_url = reverse_lazy('maintenance:maintenance_schedule_list')

class MaintenanceScheduleUpdateView(UpdateView):
    model = MaintenanceSchedule
    fields = '__all__'
    template_name = 'maintenance/maintenance_schedule_form.html'
    success_url = reverse_lazy('maintenance:maintenance_schedule_list')

class MaintenanceScheduleDeleteView(DeleteView):
    model = MaintenanceSchedule
    template_name = 'maintenance/maintenance_schedule_confirm_delete.html'
    success_url = reverse_lazy('maintenance:maintenance_schedule_list')

class WorkOrderListView(ListView):
    model = WorkOrder
    template_name = 'maintenance/work_order_list.html'

# API view para listar responsáveis
class ResponsibleListView(ListAPIView):
    queryset = Responsible.objects.all()
    serializer_class = ResponsibleSerializer

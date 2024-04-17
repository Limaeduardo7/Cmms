# maintenance/urls.py
from django.urls import path
from .views import (
    MaintenanceScheduleListView, 
    MaintenanceScheduleDetailView, 
    MaintenanceScheduleCreateView, 
    MaintenanceScheduleUpdateView, 
    MaintenanceScheduleDeleteView,
    WorkOrderListView,  # Certifique-se de que você tem uma view correspondente no seu views.py
    ResponsibleListView
)

app_name = 'maintenance'

urlpatterns = [
    path('', MaintenanceScheduleListView.as_view(), name='maintenance_schedule_list'),
    path('<int:pk>/', MaintenanceScheduleDetailView.as_view(), name='maintenance_schedule_detail'),
    path('create/', MaintenanceScheduleCreateView.as_view(), name='maintenance_schedule_create'),
    path('<int:pk>/update/', MaintenanceScheduleUpdateView.as_view(), name='maintenance_schedule_update'),
    path('<int:pk>/delete/', MaintenanceScheduleDeleteView.as_view(), name='maintenance_schedule_delete'),
    path('responsibles/', ResponsibleListView.as_view(), name='responsible-list'),
    path('work-orders/', WorkOrderListView.as_view(), name='work-order-list'),  # Adicionado nova URL para listar ordens de serviço
    # ... outras URLs conforme necessário
]

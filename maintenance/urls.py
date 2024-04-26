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
    path('schedules/', MaintenanceScheduleListView.as_view(), name='maintenance_schedule_list'),
    path('schedules/<int:pk>/', MaintenanceScheduleDetailView.as_view(), name='maintenance_schedule_detail'),
    path('schedules/create/', MaintenanceScheduleCreateView.as_view(), name='maintenance_schedule_create'),
    path('schedules/<int:pk>/update/', MaintenanceScheduleUpdateView.as_view(), name='maintenance_schedule_update'),
    path('schedules/<int:pk>/delete/', MaintenanceScheduleDeleteView.as_view(), name='maintenance_schedule_delete'),
    path('work-orders/', WorkOrderListView.as_view(), name='work_order_list'),
    path('responsibles/', ResponsibleListView.as_view(), name='responsible_list'),
]

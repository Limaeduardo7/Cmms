# maintenance/admin.py
from django.contrib import admin
from .models import MaintenanceSchedule, WorkOrder

admin.site.register(MaintenanceSchedule)
admin.site.register(WorkOrder)

# maintenance/serializers.py
from rest_framework import serializers
from .models import Responsible

class ResponsibleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Responsible
        fields = '__all__'  # Você pode escolher quais campos incluir

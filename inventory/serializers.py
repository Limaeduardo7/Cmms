from rest_framework import serializers
from .models import Asset, Category, Responsible

class AssetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asset
        fields = '__all__'  # Isso inclui todos os campos do modelo no serializador

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'  # Isso também inclui todos os campos do modelo no serializador

class ResponsibleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Responsible
        fields = '__all__'  # Isso inclui todos os campos do modelo no serializador

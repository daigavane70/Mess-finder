from rest_framework import serializers
from .models import Mess

class MessSerializer(serializers.ModelSerializer):
    class Meta:
        model=Mess
        fields=['name','owner','cuisine_type']

class MessDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=Mess
        fields='_all_'
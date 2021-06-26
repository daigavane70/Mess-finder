from django.shortcuts import render
from .models import Mess
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import MessSerializer
# Create your views here.

@api_view(['GET'])
def Mess_list(request):
    Mess_list=Mess.objects.all()
    serializer = MessSerializer(Mess_list,many=True)        #many=true will serialize all model elements
    return Response(serializer.data)

@api_view(['GET'])                                         #allows only get requests
def Mess_detail(request, pk):
    Mess_list=Mess.objects.get(id=pk)
    serializer = MessSerializer(Mess_list,many=False)       #pass object to serializer
    return Response(serializer.data)
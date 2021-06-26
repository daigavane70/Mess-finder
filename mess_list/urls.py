from django.urls import path
from . import views

urlpatterns=[
    path('all/',views.Mess_list,name='Mess_list'),
    path('details/<int:pk>/',views.Mess_detail,name='Mess_detail')

]
from django.urls import path
from . import views

urlpatterns=[
    path('',views.Mess_list,name='Mess_list'),
    path('<int:pk>/',views.Mess_detail,name='Mess_detail')

]
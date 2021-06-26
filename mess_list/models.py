from django.db import models

# Create your models here.
#all values by default are not null

class Owner(models.Model):
    name=models.CharField(max_length=100)

class Mess(models.Model):
    name=models.CharField(max_length=100)
    cuisine_type = models.CharField(max_length=150)
    owner=models.ForeignKey(Owner,on_delete=models.CASCADE)



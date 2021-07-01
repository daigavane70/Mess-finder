from django.db import models
from phone_field import PhoneField
from django.core.validators import MaxValueValidator, MinValueValidator
# Create your models here.
#all values by default are not null

class Owner(models.Model):
    first_name=models.CharField(default='None',max_length=100)
    last_name = models.CharField(default='None',max_length=100,blank=True)
    phoneno = PhoneField(help_text='Mobile no')
    email_id = models.EmailField(default='None',max_length=254,unique=True, help_text='enter email id')

class Mess(models.Model):
    name=models.CharField(default='None',max_length=100)
    cuisine_type = models.CharField(default='None',max_length=150)
    owner=models.ForeignKey(Owner,on_delete=models.PROTECT)      #Protect will prevent deletion of upstream model(in this case-Owner)
    street=models.CharField(default='None',max_length=100)
    pincode=models.IntegerField(default=431001,blank=True,null=True,validators=[MinValueValidator(100000), MaxValueValidator(999999)])
    city =models.CharField(default='None',max_length=100)

class Customers(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email_id = models.EmailField(max_length=254,help_text='enter email id',unique=True)
    phoneno = PhoneField(help_text='Mobile no')
    gender=models.CharField(max_length=56,help_text='You can write whatever you want:)')

class Review(models.Model):
    mess=models.ForeignKey(Mess,on_delete=models.CASCADE)
    review = models.CharField(max_length=1000)
    rating = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(5)])
    customer = models.ForeignKey(Customers,on_delete=models.CASCADE)

class MessImage(models.Model):
    mess = models.ForeignKey(Mess, on_delete=models.CASCADE)
    images = models.FileField(upload_to='images/')

    def __str__(self):
        return self.post.title



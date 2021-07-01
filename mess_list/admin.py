from django.contrib import admin
from .models import Mess,Owner,Review,MessImage,Customers
# Register your models here.

admin.site.register(Mess)
admin.site.register(Owner)
admin.site.register(Customers)
admin.site.register(MessImage)
admin.site.register(Review)
from django.db import models

# Create your models here.

class order(models.Model):
    p_id=models.CharField(max_length=122);
    p_name=models.CharField(max_length=122);
    p_image =models.ImageField(upload_to='products/')
    p_price=models.CharField(max_length=122);
    
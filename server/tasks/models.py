from django.db import models
from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.


class Task(models.Model):
    create_by = models.ForeignKey(get_user_model, on_delete=models.CASCADE)
    assigned_to = models.ForeignKey(get_user_model, on_delete=models.CASCADE)
    departament = models.IntegerField(default=0)
    title = models.CharField(max_length=250, default='')
    description = models.CharField(max_length=250, default='')
    state = models.CharField(max_length=250, default='')
    prority = models.IntegerField(default=0)

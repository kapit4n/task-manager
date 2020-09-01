from django.db import models
from django.db import models
from django.contrib.auth import get_user_model

from datetime import datetime

# Create your models here.


class Department(models.Model):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class Task(models.Model):
    created_by = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name='task_created_by')
    assigned_to = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name='task_assigned_to')
    departament = models.ForeignKey(
        Department, on_delete=models.CASCADE, related_name='task_department', default=0)
    title = models.CharField(max_length=250, default='')
    description = models.CharField(max_length=250, default='')
    state = models.CharField(max_length=250, default='')
    priority = models.IntegerField(default=0)
    created_at = models.DateTimeField(default=datetime.now)


class TaskComment(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE, default='')
    created_by = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name='comment_created_by')
    description = models.TextField()
    created_at = models.DateTimeField(default=datetime.now)


class TaskAssignation(models.Model):
    created_at = models.DateTimeField(default=datetime.now)
    task = models.ForeignKey(
        Task, on_delete=models.CASCADE, related_name='task_department_assignation')
    department_old = models.ForeignKey(
        Department, on_delete=models.CASCADE, related_name='department_old')
    department_current = models.ForeignKey(
        Department, on_delete=models.CASCADE, related_name='department_current')
    created_by = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name='task_department_assignation_by')

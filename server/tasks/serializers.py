from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Task

UserModel = get_user_model()

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'assigned_to', 'created_by', 'departament', 'description', 'state', 'priority')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('id', 'username')

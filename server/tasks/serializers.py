from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Task, TaskComment, TaskAssignation, Department

UserModel = get_user_model()


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'assigned_to', 'created_by',
                  'departament', 'description', 'state', 'priority')


class TaskCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskComment
        fields = ('id', 'description', 'created_by', 'task')


class TaskAssignationSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskAssignation
        fields = ('id', 'department_old', 'department_current',
                  'task', 'created_by', 'created_at')


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ('id', 'name')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('id', 'username', 'first_name', 'last_name')

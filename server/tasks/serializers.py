from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Task, TaskComment, TaskAssignation, Department

UserModel = get_user_model()

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'title', 'assigned_to', 'created_by',
                  'departament', 'description', 'state', 'priority')

class DepartmentSerializer(serializers.ModelSerializer):
    task_department = TaskSerializer(many=True)
    class Meta:
        model = Department
        fields = ('id', 'name')

class TaskCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskComment
        fields = ('id', 'description', 'created_by', 'task')


class TaskAssignationSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskAssignation
        fields = ('id', 'department_old', 'department_current',
                  'task', 'created_by', 'created_at')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = UserModel.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )
        return user

    class Meta:
        model = UserModel
        fields = ('id', 'username','password', 'first_name', 'last_name')

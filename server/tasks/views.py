from rest_framework import generics
from .models import Task, TaskComment, TaskAssignation, Department
from .serializers import TaskSerializer, UserSerializer, TaskCommentSerializer, TaskAssignationSerializer, DepartmentSerializer
from rest_framework.viewsets import ModelViewSet
from django.shortcuts import render
from django.contrib.auth import get_user_model

UserModel = get_user_model()


# Create your views here.


class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all().order_by('id')
    serializer_class = TaskSerializer


class UserViewSet(ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer


class TaskCommentViewSet(ModelViewSet):
    queryset = TaskComment.objects.all()
    serializer_class = TaskCommentSerializer

class DepartmentViewSet(ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


class TaskAssignationViewSet(ModelViewSet):
    queryset = TaskAssignation.objects.all()
    serializer_class = TaskAssignationSerializer

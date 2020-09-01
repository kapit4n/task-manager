from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer, UserSerializer
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

from rest_framework import generics
from .models import Task, TaskComment, TaskAssignation, Department
from .serializers import TaskSerializer, UserSerializer, TaskCommentSerializer, TaskAssignationSerializer, DepartmentSerializer
from rest_framework.viewsets import ModelViewSet
from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404, get_list_or_404
from rest_framework.generics import RetrieveAPIView

UserModel = get_user_model()


# Create your views here.


class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all().order_by('id')
    serializer_class = TaskSerializer


class UserViewSet(ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer


class UserInfo(RetrieveAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, username=self.request.user)
        return obj


class TaskCommentViewSet(ModelViewSet):
    queryset = TaskComment.objects.all()
    serializer_class = TaskCommentSerializer


class DepartmentViewSet(ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


class TaskAssignationViewSet(ModelViewSet):
    queryset = TaskAssignation.objects.all()
    serializer_class = TaskAssignationSerializer

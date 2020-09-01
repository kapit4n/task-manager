from django.urls import include, path
from rest_framework import routers
from .views import TaskViewSet, UserViewSet, TaskCommentViewSet, TaskAssignationViewSet, DepartmentViewSet

router = routers.DefaultRouter()

router.register(r'api/tasks', TaskViewSet)
router.register(r'api/task-comments', TaskCommentViewSet)
router.register(r'api/task-assignations', TaskAssignationViewSet)
router.register(r'api/users', UserViewSet)
router.register(r'api/departments', DepartmentViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

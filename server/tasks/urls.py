from django.urls import include, path
from rest_framework import routers
from .views import TaskViewSet, UserViewSet

router = routers.DefaultRouter()

router.register(r'api/tasks', TaskViewSet)
router.register(r'api/users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

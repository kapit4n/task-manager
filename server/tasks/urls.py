from django.urls import include, path
from rest_framework import routers
from .views import TaskViewSet, UserViewSet, TaskCommentViewSet, TaskAssignationViewSet, DepartmentViewSet, UserInfo

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

router = routers.DefaultRouter()

router.register(r'api/tasks', TaskViewSet)
router.register(r'api/task-comments', TaskCommentViewSet)
router.register(r'api/task-assignations', TaskAssignationViewSet)
router.register(r'api/users', UserViewSet)
router.register(r'api/departments', DepartmentViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('api/me/', UserInfo.as_view()),
]

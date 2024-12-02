
# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import SchoolViewSet

# router = DefaultRouter()
# router.register('school', SchoolViewSet, basename='school')

# urlpatterns = [
#     path('', include(router.urls)),
# ]
# ////////////////////////////////////////////////////////////////لينكات للشهادات 

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SchoolViewSet

from .views import CertificateDetailView  # تأكد من استيراد العرض المناسب

router = DefaultRouter()
router.register('school', SchoolViewSet, basename='school')

urlpatterns = [
    path('', include(router.urls)),
path('certificates/<int:cert_id>/', CertificateDetailView.as_view(), name='certificate-detail'),
 path('certificates/<str:profile_link>/<int:cert_id>/', CertificateDetailView.as_view(), name='certificate-detail'),
]

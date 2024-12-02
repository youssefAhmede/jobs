
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JsViewSet

from .views import CertificateDetailView  # تأكد من استيراد العرض المناسب

router = DefaultRouter()
router.register('js', JsViewSet, basename='js')

urlpatterns = [
    path('', include(router.urls)),
path('certificates/<int:cert_id>/', CertificateDetailView.as_view(), name='certificate-detail'),
 path('certificates/<str:profile_link>/<int:cert_id>/', CertificateDetailView.as_view(), name='certificate-detail'),
]

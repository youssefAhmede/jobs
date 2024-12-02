# from django.contrib import admin
# from django.urls import path
# from rest_framework.routers import DefaultRouter
# from .views import * 
# from .views import ChangePasswordView

# router = DefaultRouter()
# router.register('register', RegisterViewset, basename='register')
# router.register('login', LoginViewset, basename='login')
# router.register('users', UserViewset, basename='users')
# urlpatterns = router.urls

# urlpatterns = router.urls + [
#     path('profile/', UserProfileView.as_view({'get': 'retrieve', 'put': 'update'}), name='profile'),
#     # path('users/me/', UserProfileView.as_view({'get': 'retrieve'}), name='user-profile'),
#     path('users/me/', UserProfileView.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'update'})),
#     # path('profile/', UserProfileView.as_view({'get': 'retrieve', 'put': 'update'}), name='profile'),
#     # path('users/me/', UserProfileView.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'update'})),
#     path('users/change-password/', ChangePasswordView.as_view(), name='change-password'),  # إضافة هذا المسار
# ]

###############################################################################
###############################################################################
from django.contrib import admin
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import * 
from .views import ChangePasswordView
from .views import ExamResultsView
from .views import LatestExamResultsView
# from .views import QuizStatsView 
# from .views import save_quiz_result
router = DefaultRouter()
router.register('register', RegisterViewset, basename='register')
router.register('login', LoginViewset, basename='login')
router.register('users', UserViewset, basename='users')

urlpatterns = router.urls + [
    path('profile/', UserProfileView.as_view({'get': 'retrieve', 'put': 'update'}), name='profile'),
    path('users/me/', UserProfileView.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'update'})),
    path('users/change-password/', ChangePasswordView.as_view(), name='change-password'),
    path('profile/<str:profile_link>/', UserProfileView.as_view({'get': 'retrieve'}), name='user-profile'),  # المسار الجديد
    path('me/', UserProfileView.as_view({'get': 'retrieve'}), name='user-profile-me'),
    path('api/exam-results/', ExamResultsView.as_view(), name='exam-results'),
    path('api/exam-results/latest/', LatestExamResultsView.as_view(), name='latest_exam_results'),
]



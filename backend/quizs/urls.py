from django.urls import path

from .views import QuizCreateView
# from .views import QuizCreateView

urlpatterns = [
    path('', QuizCreateView.as_view(), name='quiz-create'),
]

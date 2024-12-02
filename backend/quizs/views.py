from rest_framework import generics
from .models import Quiz  # تأكد من وجود هذا النموذج
from .serializers import QuizSerializer  # تأكد من وجود هذا التسلسل

class QuizCreateView(generics.CreateAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

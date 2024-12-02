from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework import status
from .models import Subject
from .serializers import SubjectSerializer

class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()  # إضافة هذه السطر
    serializer_class = SubjectSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Subject.objects.filter(owner=self.request.user)  # تصفية المواد بناءً على المالك

    def list(self, request):
        subjects = self.get_queryset()
        serializer = self.get_serializer(subjects, many=True)  # تسلسل جميع المواد
        return Response(serializer.data) if subjects.exists() else Response([], status=status.HTTP_204_NO_CONTENT)

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            subject = serializer.save(owner=request.user)  # تعيين المالك
            return Response(self.get_serializer(subject).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

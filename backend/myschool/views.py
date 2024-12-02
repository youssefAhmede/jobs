# ////////////////////////////////////////////////////////////////////اظهار الملفات علي الملف الشخصي
# from rest_framework import viewsets, permissions
# from .models import School
# from .serializers import SchoolSerializer
# from rest_framework.response import Response


# class SchoolViewSet(viewsets.ModelViewSet):
#     serializer_class = SchoolSerializer
#     permission_classes = [permissions.AllowAny]  # السماح للجميع بالوصول

#     def get_queryset(self):
#         user_id = self.request.query_params.get('user_id', None)
#         if user_id:
#             return School.objects.filter(user_id=user_id)
#         return School.objects.none()

#     def list(self, request, *args, **kwargs):
#         queryset = self.get_queryset()
#         serializer = self.get_serializer(queryset, many=True)
#         return Response(serializer.data)

#     def get_object(self):
#         return School.objects.get(pk=self.kwargs['pk'])

#     def create(self, request):
#         school, created = School.objects.get_or_create(user=request.user)
#         serializer = SchoolSerializer(school, data=request.data, partial=True)
#         if serializer.is_valid():
#             serializer.save(user=request.user)
#             return Response(serializer.data, status=201)
#         return Response(serializer.errors, status=400)

#     def retrieve(self, request):
#         try:
#             school = School.objects.get(user=request.user)
#             serializer = SchoolSerializer(school)
#             return Response(serializer.data)
#         except School.DoesNotExist:
#             return Response({"detail": "School not found"}, status=404)

#     def update(self, request):
#         try:
#             school = School.objects.get(user=request.user)
#             serializer = SchoolSerializer(school, data=request.data, partial=True)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response(serializer.data)
#             return Response(serializer.errors, status=400)
#         except School.DoesNotExist:
#             return Response({"detail": "School not found"}, status=404)
# ////////////////////////////////////////////////////////////////////تخزين الشهادات

# from rest_framework import viewsets, permissions
# from .models import School
# from .serializers import SchoolSerializer
# from rest_framework.response import Response


# class SchoolViewSet(viewsets.ModelViewSet):
#     permission_classes = [permissions.IsAuthenticated]
#     serializer_class = SchoolSerializer

#     def get_queryset(self):
#         return School.objects.filter(user=self.request.user)

#     def get_object(self):
#         return School.objects.get(user=self.request.user)

#     def create(self, request):
#         school, created = School.objects.get_or_create(user=request.user)
#         serializer = SchoolSerializer(school, data=request.data, partial=True)
#         if serializer.is_valid():
#             serializer.save(user=request.user)
#             return Response(serializer.data, status=201)
#         return Response(serializer.errors, status=400)

#     def retrieve(self, request):
#         try:
#             school = School.objects.get(user=request.user)
#             serializer = SchoolSerializer(school)
#             return Response(serializer.data)
#         except School.DoesNotExist:
#             return Response({"detail": "School not found"}, status=404)

#     def update(self, request):
#         try:
#             school = School.objects.get(user=request.user)
#             serializer = SchoolSerializer(school, data=request.data, partial=True)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response(serializer.data)
#             return Response(serializer.errors, status=400)
#         except School.DoesNotExist:
#             return Response({"detail": "School not found"}, status=404)

#     def list(self, request):
#         try:
#             school = School.objects.get(user=request.user)
#             serializer = SchoolSerializer(school)
#             return Response(serializer.data)
#         except School.DoesNotExist:
#             return Response({"detail": "School not found"}, status=404)
# //////////////////////////////////////////////////////////////////// mix
from rest_framework import viewsets, permissions
from .models import School
from .serializers import SchoolSerializer
from rest_framework.response import Response

class SchoolViewSet(viewsets.ModelViewSet):
    serializer_class = SchoolSerializer

    def get_queryset(self):
        # إذا كان هناك user_id في معلمات الاستعلام، سنقوم بجلب البيانات بناءً على ذلك.
        user_id = self.request.query_params.get('user_id', None)
        if user_id:
            return School.objects.filter(user_id=user_id)
        elif self.request.user.is_authenticated:
            return School.objects.filter(user=self.request.user)
        return School.objects.none()

    def list(self, request, *args, **kwargs):
        # عرض الشهادات حسب user_id أو بيانات المستخدم الحالي إذا كان مسجلاً دخوله.
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def get_object(self):
        # جلب كائن محدد بناءً على primary key
        return School.objects.get(pk=self.kwargs['pk'])

    def create(self, request):
        # إضافة أو تحديث بيانات الشهادة للمستخدم المصادق عليه.
        if not request.user.is_authenticated:
            return Response({"detail": "Authentication credentials were not provided."}, status=401)

        school, created = School.objects.get_or_create(user=request.user)
        serializer = SchoolSerializer(school, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def retrieve(self, request):
        # جلب بيانات المدرسة للمستخدم المصادق عليه
        if not request.user.is_authenticated:
            return Response({"detail": "Authentication credentials were not provided."}, status=401)

        try:
            school = School.objects.get(user=request.user)
            serializer = SchoolSerializer(school)
            return Response(serializer.data)
        except School.DoesNotExist:
            return Response({"detail": "School not found"}, status=404)

    def update(self, request):
        # تحديث بيانات الشهادة للمستخدم المصادق عليه
        if not request.user.is_authenticated:
            return Response({"detail": "Authentication credentials were not provided."}, status=401)

        try:
            school = School.objects.get(user=request.user)
            serializer = SchoolSerializer(school, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        except School.DoesNotExist:
            return Response({"detail": "School not found"}, status=404)


# ////////////////////////////////////////////////////////////////لينكات للشهادات 
from rest_framework import status  # استيراد status
from rest_framework.views import APIView  # تأكد من استيراد APIView
# class CertificateDetailView(APIView):
#     def get(self, request, cert_id):
#         try:
#             school = School.objects.get(certificates__id=cert_id)  # افترض أن الشهادات مخزنة في حقل JSON
#             # ابحث عن الشهادة المطلوبة في حقل الشهادات
#             certificates = school.certificates
#             certificate = next((cert for cert in certificates if cert['id'] == cert_id), None)

#             if certificate:
#                 return Response(certificate, status=status.HTTP_200_OK)
#             else:
#                 return Response({"detail": "Certificate not found."}, status=status.HTTP_404_NOT_FOUND)
#         except School.DoesNotExist:
#             return Response({"detail": "School not found."}, status=status.HTTP_404_NOT_FOUND)
        
# مثال لعرض تفاصيل الشهادة
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import School  # تأكد من أنك تستورد النموذج الصحيح

class CertificateDetailView(APIView):
    def get(self, request, profile_link, cert_id):
        try:
            # ابحث عن المدرسة بناءً على profile_link
            school = School.objects.filter(profile_link=profile_link).first()
            if school:
                # ابحث عن الشهادة بناءً على certId داخل الحقل JSONField
                certificate = next((cert for cert in school.certificates if cert["id"] == int(cert_id)), None)
                if certificate:
                    return Response(certificate, status=status.HTTP_200_OK)
            return Response({"detail": "Certificate not found."}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
from rest_framework import viewsets
from .models import Js
from .serializers import JsSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

class JsViewSet(viewsets.ModelViewSet):
    serializer_class = JsSerializer

    def get_queryset(self):
        # إذا كان هناك user_id في معلمات الاستعلام، سنقوم بجلب البيانات بناءً على ذلك.
        user_id = self.request.query_params.get('user_id', None)
        if user_id:
            return Js.objects.filter(user_id=user_id)
        elif self.request.user.is_authenticated:
            return Js.objects.filter(user=self.request.user)
        return Js.objects.none()

    def list(self, request, *args, **kwargs):
        # عرض الشهادات حسب user_id أو بيانات المستخدم الحالي إذا كان مسجلاً دخوله.
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def get_object(self):
        # جلب كائن محدد بناءً على primary key
        return Js.objects.get(pk=self.kwargs['pk'])

    def create(self, request):
        # إضافة أو تحديث بيانات الشهادة للمستخدم المصادق عليه.
        if not request.user.is_authenticated:
            return Response({"detail": "Authentication credentials were not provided."}, status=401)

        js, created = Js.objects.get_or_create(user=request.user)
        serializer = JsSerializer(js, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def retrieve(self, request):
        # جلب بيانات المدرسة للمستخدم المصادق عليه
        if not request.user.is_authenticated:
            return Response({"detail": "Authentication credentials were not provided."}, status=401)

        try:
            js = Js.objects.get(user=request.user)
            serializer = JsSerializer(js)
            return Response(serializer.data)
        except Js.DoesNotExist:
            return Response({"detail": "Js not found"}, status=404)

    def update(self, request):
        # تحديث بيانات الشهادة للمستخدم المصادق عليه
        if not request.user.is_authenticated:
            return Response({"detail": "Authentication credentials were not provided."}, status=401)

        try:
            js = Js.objects.get(user=request.user)
            serializer = JsSerializer(js, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        except Js.DoesNotExist:
            return Response({"detail": "Js not found"}, status=404)

class CertificateDetailView(APIView):
    def get(self, request, profile_link, cert_id):
        try:
            # ابحث عن المدرسة بناءً على profile_link
            js = Js.objects.filter(profile_link=profile_link).first()
            if js:
                # ابحث عن الشهادة بناءً على certId داخل الحقل JSONField
                certificate = next((cert for cert in js.certificates if cert["id"] == int(cert_id)), None)
                if certificate:
                    return Response(certificate, status=status.HTTP_200_OK)
            return Response({"detail": "Certificate not found."}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# from django.shortcuts import get_object_or_404, render
# from django.conf import settings
# from rest_framework.permissions import IsAuthenticated

# from rest_framework import viewsets, permissions 
# from .serializers import LoginSerializer, RegisterSerializer, UserProfileSerializer
# from .models import * 
# from rest_framework.response import Response 
# from django.contrib.auth import get_user_model, authenticate
# from knox.models import AuthToken
# from rest_framework import status
# from rest_framework.views import APIView
# from rest_framework import generics
# from .serializers import ExamResultSerializer  # Adjust the import path as necessary

# # from rest_framework.response import Response
# from django.contrib.auth import update_session_auth_hash
# # from django.contrib.auth import get_user_model

# User = get_user_model()

# from django.core.mail import send_mail
# from django.http import HttpResponse
# def send_test_email(request):
#     subject = 'Test Email'
#     message = 'This is a test email sent from Django.'
#     recipient_list = ['ya798317@gmail.com']
    
#     send_mail(subject, message, DEFAULT_FROM_EMAIL, recipient_list)
#     return HttpResponse('Email sent!')


# class LoginViewset(viewsets.ViewSet):
#     permission_classes = [permissions.AllowAny]
#     serializer_class = LoginSerializer

#     def create(self, request): 
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid(): 
#             email = serializer.validated_data['email']
#             password = serializer.validated_data['password']
#             user = authenticate(request, email=email, password=password)
#             if user: 
#                 _, token = AuthToken.objects.create(user)
#                 return Response(
#                     {
#                         "user": self.serializer_class(user).data,
#                         "token": token
#                     }
#                 )
#             else: 
#                 return Response({"error":"Invalid credentials"}, status=401)    
#         else: 
#             return Response(serializer.errors,status=400)



# class RegisterViewset(viewsets.ViewSet):
#     permission_classes = [permissions.AllowAny]
#     queryset = User.objects.all()
#     serializer_class = RegisterSerializer

#     def create(self,request):
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             # serializer.save()
#             user = serializer.save()
#             return Response({
#                 'id': user.id,
#                 'email': user.email,
#                 'first_name': user.first_name,  # إضافة first_name
#                 'last_name': user.last_name,    # إضافة last_name
#             })
#         else: 
#             return Response(serializer.errors,status=400)


# class UserViewset(viewsets.ViewSet):
#     permission_classes = [permissions.IsAuthenticated]
#     queryset = User.objects.all()
#     serializer_class = RegisterSerializer

#     def list(self,request):
#         queryset = User.objects.all()
#         serializer = self.serializer_class(queryset, many=True)
#         return Response(serializer.data)
    
# # views.py
# class UserProfileView(viewsets.ViewSet):
#     permission_classes = [permissions.IsAuthenticated]
#     serializer_class = UserProfileSerializer

#     def retrieve(self, request, profile_link=None):
#         user = get_object_or_404(User, profile_link=profile_link)
#         serializer = self.serializer_class(user)
#         return Response(serializer.data)


#     def update(self, request):
#         serializer = self.serializer_class(request.user, data=request.data, partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=400)

# from rest_framework import serializers
# from .models import CustomUser  # تأكد من استخدام النموذج الصحيح

# class UserProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomUser
#         fields = ['id', 'email', 'first_name', 'last_name', 'birthday']  # أضف أي حقول إضافية ترغب في إظهارها


# class ChangePasswordView(APIView):
#     permission_classes = [permissions.IsAuthenticated]

#     def post(self, request, *args, **kwargs):
#         user = request.user
#         old_password = request.data.get("old_password")
#         new_password = request.data.get("new_password")

#         # التحقق من كلمة المرور القديمة
#         if not user.check_password(old_password):
#             return Response({"detail": "Old password is incorrect"}, status=status.HTTP_400_BAD_REQUEST)

#         # تعيين كلمة المرور الجديدة
#         user.set_password(new_password)
#         user.save()

#         # تحديث جلسة المستخدم حتى لا يتم تسجيل الخروج
#         update_session_auth_hash(request, user)

#         return Response({"detail": "Password updated successfully"}, status=status.HTTP_200_OK)
#     # يمكنك تشغيل هذا السكربت في Django shell
# from users.models import CustomUser
# import uuid

# for user in CustomUser.objects.all():
#     if not user.profile_link:
#         profile_link = str(uuid.uuid4())
#         while CustomUser.objects.filter(profile_link=profile_link).exists():
#             profile_link = str(uuid.uuid4())
#         user.profile_link = profile_link
#         user.save()

# # في views.py
# # from rest_framework import status
# # from rest_framework.response import Response
# # from rest_framework.views import APIView

# # from rest_framework.views import APIView
# # from rest_framework.response import Response
# # from rest_framework import status
# from .models import ExamResult  # تأكد من أنك قد أنشأت نموذج ExamResult

# class ExamResultsView(generics.ListCreateAPIView):
#     queryset = ExamResult.objects.all()
#     serializer_class = ExamResultSerializer

#     def create(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=201)
#         return Response(serializer.errors, status=400)
    
# from rest_framework import generics
# # from .models import ExamResult
# from .serializers import ExamResultSerializer

# from rest_framework import generics
# from rest_framework.response import Response
# from rest_framework import status
# from .models import ExamResult
# from .serializers import ExamResultSerializer

# class LatestExamResultsView(generics.ListAPIView):
#     serializer_class = ExamResultSerializer

#     def get_queryset(self):
#         return ExamResult.objects.all().order_by('-created_at')[:1]

#     def get(self, request, *args, **kwargs):
#         queryset = self.get_queryset()
#         if queryset.exists():
#             serializer = self.get_serializer(queryset, many=True)
#             return Response(serializer.data)
#         return Response({'detail': 'No results found.'}, status=status.HTTP_404_NOT_FOUND)
###############################################################################
###############################################################################

from django.shortcuts import get_object_or_404, render
from django.conf import settings
from rest_framework.permissions import IsAuthenticated

from rest_framework import viewsets, permissions 
from .serializers import LoginSerializer, RegisterSerializer, UserProfileSerializer
from .models import * 
from rest_framework.response import Response 
from django.contrib.auth import get_user_model, authenticate
from knox.models import AuthToken
from rest_framework import status
from rest_framework.views import APIView
from rest_framework import generics
from .serializers import ExamResultSerializer  # Adjust the import path as necessary

# from rest_framework.response import Response
from django.contrib.auth import update_session_auth_hash
# from django.contrib.auth import get_user_model

User = get_user_model()

from django.core.mail import send_mail
from django.http import HttpResponse
def send_test_email(request):
    subject = 'Test Email'
    message = 'This is a test email sent from Django.'
    recipient_list = ['ya798317@gmail.com']
    
    send_mail(subject, message, DEFAULT_FROM_EMAIL, recipient_list)
    return HttpResponse('Email sent!')


class LoginViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = LoginSerializer

    def create(self, request): 
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(): 
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(request, email=email, password=password)
            if user: 
                _, token = AuthToken.objects.create(user)
                return Response(
                    {
                        "user": self.serializer_class(user).data,
                        "token": token
                    }
                )
            else: 
                return Response({"error":"Invalid credentials"}, status=401)    
        else: 
            return Response(serializer.errors,status=400)



class RegisterViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def create(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            # serializer.save()
            user = serializer.save()
            return Response({
                'id': user.id,
                'email': user.email,
                'first_name': user.first_name,  # إضافة first_name
                'last_name': user.last_name,    # إضافة last_name
                'profile_link':user.profile_link
            })
        else: 
            return Response(serializer.errors,status=400)


class UserViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny] 
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def list(self,request):
        queryset = User.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
# views.py
# views.py
# ############################## الينك موجود عند الضغط علي الايقونة لكن الناس لا تستطيع الوصول للينك
from rest_framework import viewsets, permissions
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .models import CustomUser
from .serializers import UserProfileSerializer

class UserProfileView(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]  # السماح للجميع بالوصول

    serializer_class = UserProfileSerializer

    def retrieve(self, request, profile_link=None):
        if profile_link:
            user = get_object_or_404(CustomUser, profile_link=profile_link)
        elif request.user.is_authenticated:
            user = request.user
        else:
            return Response({"detail": "Authentication credentials were not provided."}, status=401)
        
        serializer = self.serializer_class(user)
        return Response(serializer.data)

    def update(self, request): 
        if not request.user.is_authenticated:
            return Response({"detail": "Authentication credentials were not provided."}, status=401)
        
        serializer = self.serializer_class(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

##############################################
from rest_framework import serializers
from .models import CustomUser  # تأكد من استخدام النموذج الصحيح

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'first_name', 'last_name', 'birthday']  # أضف أي حقول إضافية ترغب في إظهارها
from users.models import CustomUser
import uuid

for user in CustomUser.objects.all():
    if not user.profile_link:
        profile_link = str(uuid.uuid4())
        while CustomUser.objects.filter(profile_link=profile_link).exists():
            profile_link = str(uuid.uuid4())
        user.profile_link = profile_link
        user.save()
from rest_framework.permissions import AllowAny
class ChangePasswordView(APIView):
    permission_classes = [permissions.AllowAny] 

    def post(self, request, *args, **kwargs):
        user = request.user
        old_password = request.data.get("old_password")
        new_password = request.data.get("new_password")

        # التحقق من كلمة المرور القديمة
        if not user.check_password(old_password):
            return Response({"detail": "Old password is incorrect"}, status=status.HTTP_400_BAD_REQUEST)

        # تعيين كلمة المرور الجديدة
        user.set_password(new_password)
        user.save()

        # تحديث جلسة المستخدم حتى لا يتم تسجيل الخروج
        update_session_auth_hash(request, user)

        return Response({"detail": "Password updated successfully"}, status=status.HTTP_200_OK)
    # يمكنك تشغيل هذا السكربت في Django shell


# في views.py
# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.views import APIView

# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
from .models import ExamResult  # تأكد من أنك قد أنشأت نموذج ExamResult

class ExamResultsView(generics.ListCreateAPIView):
    queryset = ExamResult.objects.all()
    serializer_class = ExamResultSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
from rest_framework import generics
# from .models import ExamResult
from .serializers import ExamResultSerializer

from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import ExamResult
from .serializers import ExamResultSerializer

class LatestExamResultsView(generics.ListAPIView):
    serializer_class = ExamResultSerializer

    def get_queryset(self):
        return ExamResult.objects.all().order_by('-created_at')[:1]

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        if queryset.exists():
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data)
        return Response({'detail': 'No results found.'}, status=status.HTTP_404_NOT_FOUND)
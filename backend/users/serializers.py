# from rest_framework import serializers 
# from .models import * 
# from django.contrib.auth import get_user_model 
# User = get_user_model()

# class LoginSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     password = serializers.CharField()

#     def to_representation(self, instance):
#         ret = super().to_representation(instance)
#         ret.pop('password', None)
#         return ret


# class RegisterSerializer(serializers.ModelSerializer):
#     class Meta: 
#         model = User
#         fields = ('id', 'email', 'password', 'first_name', 'last_name')
#         extra_kwargs = { 'password': {'write_only':True}}
    
#     def create(self, validated_data):
#         user = User.objects.create_user(**validated_data)
#         return user
    
# class UserProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'email', 'first_name', 'last_name')
###############################################################################
###############################################################################
from rest_framework import serializers 
from .models import * 
from django.contrib.auth import get_user_model 
# from rest_framework import serializers

User = get_user_model()

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret.pop('password', None)
        return ret


class RegisterSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = ('id', 'email', 'password', 'first_name', 'last_name','profile_link')
        extra_kwargs = { 'password': {'write_only':True}}
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name','profile_link')


# from rest_framework import serializers
from .models import ExamResult

class ExamResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamResult
        fields = ['exam_name', 'score']


# from .models import Quiz
# class NameSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Quiz
#         fields = '__all__'

# class QuizSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Quiz
#         fields = ['name']
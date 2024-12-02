from rest_framework import serializers

from .models import Quiz
class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz  # Your model name
        fields = ['name']  # Include any other required fields here
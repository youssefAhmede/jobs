from django.db import models

# Create your models here.
class Quiz(models.Model):
    name = models.CharField(max_length=255) 
    quiz = models.CharField(max_length=100)

    def __str__(self):
        return self.quiz
from django.db import models
from django.conf import settings

class Subject(models.Model):
    name = models.CharField(max_length=255)
    # owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='subjects', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.name

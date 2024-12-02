from django.db import models
from django.conf import settings

class School(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    # correctQ1 = models.IntegerField(default=0)
    # timeQ1 = models.FloatField(default=0)
    # correctQ2 = models.IntegerField(default=0)
    # timeQ2 = models.FloatField(default=0)

    profile_link = models.CharField(max_length=200, blank=True, null=True, default='')
    certificates = models.JSONField(default=list)
    # certificate_name = models.CharField(max_length=255, null=True, blank=True,default='')  # إضافة حقل الشهادة
    # correctQ3 = models.IntegerField(default=0)
    # timeQ3 = models.FloatField(default=0)
    # certificate_name2 = models.CharField(max_length=255, null=True, blank=True,default='')  # إضافة حقل الشهادة
    # corrects = models.JSONField(default=list)
    # finals = models.JSONField(default=list)


    def __str__(self):
        return f"{self.user.email}"

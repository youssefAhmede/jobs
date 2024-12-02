
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from django_rest_passwordreset.signals import reset_password_token_created
from django.dispatch import receiver 
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from django.utils.html import strip_tags
import random
import string

class CustomUserManager(BaseUserManager):
    def create_user(self, email,  password=None, **extra_fields):
        if not email:
            raise ValueError('Email is a required field')
        
        email = self.normalize_email(email)
        profile_link = self.generate_unique_profile_link(email[:4])
        user = self.model(email=email,  profile_link=profile_link, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email,  password=None, **extra_fields): 
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email,  password, **extra_fields)

    def generate_unique_profile_link(self, email):
        base_link = f"{email.lower()[:3]}"
        unique_link = base_link
        while CustomUser.objects.filter(profile_link=unique_link).exists():
            unique_suffix = ''.join(random.choices(string.ascii_lowercase + string.digits, k=6))
            unique_link = f"{base_link}-{unique_suffix}"
        return unique_link

# models.py
class CustomUser(AbstractUser):
    email = models.CharField(max_length=200, unique=True)
    profile_link = models.CharField(max_length=200, unique=True, null=True, blank=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']  # Ensure 'email' is not in this list

    def save(self, *args, **kwargs):
        if not self.profile_link:
            self.profile_link = CustomUser.objects.generate_unique_profile_link(self.email[:4])
        super().save(*args, **kwargs)



@receiver(reset_password_token_created)
def password_reset_token_created(reset_password_token, *args, **kwargs):
    sitelink = "http://localhost:5173/"
    token = "{}".format(reset_password_token.key)
    full_link = str(sitelink)+str("password-reset/")+str(token)

    print(token)
    print(full_link)

    context = {
        'full_link': full_link,
        'email_adress': reset_password_token.user.email
    }

    html_message = render_to_string("backend/email.html", context=context)
    plain_message = strip_tags(html_message)

    msg = EmailMultiAlternatives(
        subject = "Request for resetting password for {title}".format(title=reset_password_token.user.email), 
        body=plain_message,
        from_email = "Camel@Camel.com", 
        to=[reset_password_token.user.email]
    )

    msg.attach_alternative(html_message, "text/html")
    msg.send()



class ExamResult(models.Model):
    exam_name = models.CharField(max_length=100)
    score = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.exam_name} - {self.score}"
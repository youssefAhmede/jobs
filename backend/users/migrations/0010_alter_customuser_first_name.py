# Generated by Django 5.1.2 on 2024-11-29 18:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0009_customuser_birthday_alter_customuser_email_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='first_name',
            field=models.CharField(default='', max_length=255),
        ),
    ]

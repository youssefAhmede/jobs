# Generated by Django 5.1.2 on 2024-10-30 22:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myschool', '0025_alter_school_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='school',
            name='profile_link',
            field=models.CharField(blank=True, default='', max_length=200, null=True),
        ),
    ]

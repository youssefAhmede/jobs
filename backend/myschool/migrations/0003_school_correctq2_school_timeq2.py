# Generated by Django 5.1.2 on 2024-10-23 12:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myschool', '0002_school_correct_school_timetaken'),
    ]

    operations = [
        migrations.AddField(
            model_name='school',
            name='correctQ2',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='school',
            name='timeQ2',
            field=models.FloatField(default=0),
        ),
    ]

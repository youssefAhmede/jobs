from rest_framework import serializers
from .models import Js

class JsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Js
        fields = ['correctQ1','timeQ1','correctQ2','timeQ2','certificates','profile_link']

from rest_framework import serializers
from .models import Company, Vacancy


class CompanySerializer1(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    description = serializers.CharField()
    city = serializers.CharField(max_length=100)
    address = serializers.CharField()

    def create(self, validated_data):
        return Company.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.save()
        return instance


class CompanySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'


class VacancySerializer1(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    description = serializers.CharField()
    salary = serializers.FloatField(default=0.0)
    company = CompanySerializer2()

    def create(self, validated_data):
        return Vacancy.objects.create(**validated_data)

    # def update(self, instance, validated_data):


class VacancySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'

from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Company, Vacancy
from .serializers import *


# Create your views here.

@api_view(['GET', 'POST'])
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        return Response(CompanySerializer1(companies, many=True).data, status=200)

    elif request.method == 'POST':
        serializer = CompanySerializer1(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    else:
        return Response({'error': 'page not found'}, status=404)


class CompaniesAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        return Response(CompanySerializer2(companies, many=True).data, status=200)

    def post(self, request):
        serializer = CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


@api_view(['GET', 'PUT', 'DELETE'])
def company_by_id(request, c_id):
    try:
        company = Company.objects.get(id=c_id)
    except Company.DoesNotExist as err:
        return Response({'error': str(err)}, status=400)

    if request.method == 'GET':
        return Response(CompanySerializer1(company).data, status=200)

    elif request.method == 'PUT':
        serializer = CompanySerializer1(data=request.data, instance=company)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)

    elif request.method == 'DELETE':
        company.delete()
        return Response({'deleted': True, 'Company': CompanySerializer1(company).data}, status=204)

    else:
        return Response({'error': 'page not found'}, status=404)


class CompanyByIdAPIView(APIView):
    def get_company(self, c_id):
        try:
            company = Company.objects.get(id=c_id)
            return company
        except Company.DoesNotExist as err:
            return Response({'error': str(err)}, status=400)

    def get(self, request, c_id):
        company = self.get_company(c_id)
        return Response(CompanySerializer2(company).data, status=200)

    def put(self, request, c_id):
        company = self.get_company(c_id)
        serializer = CompanySerializer2(company)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)

    def delete(self, request, c_id):
        company = self.get_company(c_id)
        company.delete()
        return Response({'deleted': True, 'Company': CompanySerializer1(company).data}, status=204)


@api_view(['GET'])
def company_vacancies(request, c_id):
    if request.method == 'GET':
        try:
            company_ins = Company.objects.get(id=c_id)
            vacancies = Vacancy.objects.filter(company=company_ins)
            return Response(VacancySerializer1(vacancies, many=True).data, status=200)
        except Company.DoesNotExist as err:
            return Response({'error': str(err)}, status=400)


class CompanyVacanciesAPIView(APIView):
    def get_vacancies(self, c_id):
        try:
            company_ins = Company.objects.get(id=c_id)
            vacancies = Company.objects.filter(company=company_ins)
            return vacancies
        except Company.DoesNotExist as err:
            return Response({'error': str(err)}, status=400)

    def get(self, request, c_id):
        vacancies = self.get_vacancies(c_id)
        return Response(VacancySerializer2(vacancies, many=True).data, status=200)


@api_view(['GET', 'POST'])
def vacancies_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        return Response(VacancySerializer1(vacancies, many=True).data, status=200)

    elif request.method == 'POST':
        serializer = VacancySerializer1(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    else:
        return Response({'error': 'page not found'}, status=404)


class VacanciesAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        return Response(VacancySerializer2(vacancies, many=True).data, status=200)

    def post(self, request):
        serializer = VacancySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


@api_view(['GET', 'PUT', 'DELETE'])
def vacancy_by_id(request, v_id):
    try:
        vacancy = Vacancy.objects.get(id=v_id)
    except Vacancy.DoesNotExist as err:
        return Response({'error': str(err)}, status=400)

    if request.method == 'GET':
        return Response(VacancySerializer1(vacancy).data, status=200)

    elif request.method == 'PUT':
        serializer = VacancySerializer1(data=request.data, instance=vacancy)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)

    elif request.method == 'DELETE':
        vacancy.delete()
        return Response({'deleted': str(vacancy)}, status=204)

    else:
        return Response({'error': 'page not found'}, status=404)


class VacancyByIdAPIView(APIView):
    def get_vacancy(self, v_id):
        try:
            vacancy = Vacancy.objects.get(id=v_id)
            return vacancy
        except Vacancy.DoesNotExist as err:
            return Response({'error': str(err)}, status=400)

    def get(self, request, v_id):
        vacancy = self.get_vacancy(v_id)
        return Response(VacancySerializer2(vacancy).data, status=200)

    def put(self, request, v_id):
        vacancy = self.get_vacancy(v_id)
        serializer = VacancySerializer2(vacancy)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)

    def delete(self, request, v_id):
        vacancy = self.get_vacancy(v_id)
        vacancy.delete()
        return Response({'deleted': str(vacancy)}, status=204)


@api_view(['GET'])
def top_ten(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        return Response(VacancySerializer1(vacancies, many=True).data, status=200)


class TopTenAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        return Response(VacancySerializer2(vacancies, many=True).data, status=200)

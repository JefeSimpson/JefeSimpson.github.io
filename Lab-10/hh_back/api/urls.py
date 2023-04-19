from django.urls import path

from . import views

urlpatterns = [
    path('companies/', views.companies_list),
    # path('companies/', views.CompaniesAPIView.as_view()),
    # path('companies/<int:c_id>/', views.company_by_id),
    path('companies/<int:c_id>/', views.CompanyByIdAPIView.as_view()),
    path('companies/<int:c_id>/vacancies/', views.company_vacancies),
    # path('companies/<int:c_id>/vacancies/', views.CompanyVacanciesAPIView.as_view()),
    # path('vacancies/', views.vacancies),
    path('vacancies/', views.VacanciesAPIView.as_view()),
    path('vacancies/<int:v_id>/', views.vacancy_by_id),
    # path('vacancies/<int:v_id>/', views.VacancyByIdAPIView.as_view()),
    # path('vacancies/top_ten/', views.top_ten),
    path('vacancies/top_ten/', views.TopTenAPIView.as_view()),
]
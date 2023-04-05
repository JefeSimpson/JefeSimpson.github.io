from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.products_list, name='products_list'),
    path('products/<int:p_id>/', views.product_detail, name='product_detail'),
    path('categories/', views.categories_list, name='categories_list'),
    path('categories/<int:c_id>/', views.category_detail, name='category_details'),
    path('categories/<int:c_id>/products/', views.category_products, name='category_products'),
]

import json

from django.shortcuts import render
from django.http.response import JsonResponse
from .models import Product, Category


# Create your views here.
def products_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    if not products:
        return JsonResponse({'error': 'Products not found'})
    return JsonResponse(products_json, safe=False)


def product_detail(request, p_id):
    try:
        product = Product.objects.get(id=p_id)
        return JsonResponse(product.to_json())
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'})


def categories_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)


def category_detail(request, c_id):
    try:
        category = Category.objects.get(id=c_id)
        # products = Product.objects.filter(category=category.name)
        return JsonResponse(category.to_json())
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'})


def category_products(request, c_id):
    try:
        category = Category.objects.get(id=c_id)
        products = Product.objects.filter(category_fn_key=category.name)
        products_json = [p.to_json() for p in products]
        return JsonResponse(products_json, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'})



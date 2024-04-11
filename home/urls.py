from django.urls import path
from .views import *


urlpatterns = [
    path('', index),
    path('book_now/',book_now),
]

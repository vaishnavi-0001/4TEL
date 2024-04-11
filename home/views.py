from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'home/index.html')

def book_now(request):
    return render(request, 'home/book_now.html')
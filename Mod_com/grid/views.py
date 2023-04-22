from django.shortcuts import render,HttpResponse,redirect
from django.shortcuts import *
from grid.models import *
from django.contrib.auth.models import User
from django.contrib.auth import *

# Create your views here.


def home(request):
    return render(request,"index.html")

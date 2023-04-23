from django.shortcuts import render,HttpResponse,redirect
from django.shortcuts import *
from grid.models import *
from django.contrib.auth.models import User
from django.contrib.auth import *
from django.http import JsonResponse
# Create your views here.


def home(request):
    return render(request,"home.html")

def face(request):
    return render(request,"face.html")

def userlogin(request):
    if(request.method=="POST"):
        username=request.POST.get("username")
        password=request.POST.get("password")
        uuser=authenticate(username=username,password=password)
        
        if(uuser is not None):
            login(request,uuser)
            return redirect("home")
        else:
            return redirect("login")
        
    return render(request,"login.html")

def get_data(request):
    data={
        'name':'KAnishk'
    }
    return JsonResponse(data)
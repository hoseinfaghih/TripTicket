from django.shortcuts import render,redirect
from django.contrib.auth import login,logout,authenticate
from .forms import CustomRegistrationForm
# Create your views here.

def index (request):
    return render(request,'main/index.html')


def register_view(request):
    form = CustomRegistrationForm()
    context = {'form':form}
    return render(request,'auth/register.html',context=context)    
    
    

def login_view (request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('index')
        
        else:
            return render(request, "auth/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        if request.user.is_authenticated:
            return redirect('index')
        else:
            return render(request, "auth/login.html")


def logout_view(request):
    logout(request)
    return redirect('index')
    

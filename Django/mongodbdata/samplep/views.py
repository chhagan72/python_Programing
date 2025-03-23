from django.shortcuts import render,redirect
from .models import Todo

# Create your views here.

def index(request):
    return render(request, 'index.html')

def submit_form(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        user_form = Todo(name=name, email=email, message=message)
        user_form.save()


        return redirect('thanks')

    return render(request, 'form.html')




def thanks(request):
    return render(request, 'thanks.html')
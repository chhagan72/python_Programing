from django.shortcuts import redirect, render
from .model import myApp


def myapp_data(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        msg = request.POST.get('msg')

        form_data = myApp(name=name, email=email, msg=msg)
        form_data.save()

        return redirect('thanks')
    return render(request, 'form.html')

def thanks(request):
    return render(request, 'thanks.html')
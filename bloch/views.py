from django.shortcuts import render 
from django.http import HttpResponse

from django.views.generic import TemplateView 
 
'''
class IndexView(TemplateView):
    template_name = 'index_en.html'

index = IndexView.as_view()
'''

def index(request):
    return render(request, 'index_en.html')

def jaview(request):
    return render(request, 'index_ja.html')

def tryview(request):
    return render(request, 'try.html')

def challengeview(request):
    return render(request, 'challenge.html')

def drawview(request):
    return render(request, 'draw.html')

import imp
from multiprocessing import Value
from django.http import JsonResponse
from django.shortcuts import render
from django.views import *
# import json
import urllib.request, json 



class Home(View):
    def get(self,request):
        return render(request,'home.html')
class Showdb(View):
    def get(self,request):
      
        url='http://127.0.0.1:8000/static/js/datatable2.json/'
        with urllib.request.urlopen(f"{url}") as url:
            data = json.loads(url.read().decode())
            
        return JsonResponse({'data':data},safe=False)


        

            

                
                    
            





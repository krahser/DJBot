# -*- coding: utf-8 -*-
from django.utils import simplejson
from dajaxice.decorators import dajaxice_register
from botnet.aula.models import Aula, Tarea
from django.contrib.auth.decorators import login_required


@login_required
@dajaxice_register
def obtener_aulas(request):
    consulta_aulas = Aula.objects.all()
    datos = {}
    nombres = []
    for each in consulta_aulas:
        nombres.append(each.nombre)
        datos[each.nombre] = {
            'nombre': each.nombre,
            'maquina_intermediaria': each.maquina_intermediaria,
            'red': each.red, 'mascara': each.mascara
            }
    return simplejson.dumps(datos)


@login_required
@dajaxice_register
def obtener_tareas(request):

    return simplejson.dumps({'a': 'dsasd'})
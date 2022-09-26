import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Especialidades } from '../models/Especialidades';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  constructor(private http:HttpClient) { }
  getEspecialidades(){
    console.log("Obtener especialidades");
    return this.http.get<Especialidades[]>('http://localhost:8081/medicos/especialidades');
  }
}

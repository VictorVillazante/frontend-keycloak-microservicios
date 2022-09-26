import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicos } from '../models/Medicos';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private http:HttpClient) { }
  getMedicosPorEspecialidadId(id:any){
    console.log("Obtener medicos");
    return this.http.get<Medicos[]>('http://localhost:8081/medicos/especialidades/'+id);
  }
}

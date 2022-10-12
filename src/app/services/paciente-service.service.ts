import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacienteServiceService {

  constructor(private http:HttpClient) { }

  obtenerTodosPacientes(){
    return this.http.get<any>('http://localhost:8081/adm/pacientes');

  }
}

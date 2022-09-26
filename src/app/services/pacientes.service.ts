import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsultasPacientesId } from '../models/ConsultasPacientesId';
@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  constructor(private http:HttpClient) { }
  getConsultas(idPaciente:any){
    console.log("Obtener consultas");
    return this.http.get<ConsultasPacientesId[]>('http://localhost:8081/pacientes/reservas/'+idPaciente);
  }
  cancelarConsulta(id:any){
    return this.http.delete<ConsultasPacientesId[]>('http://localhost:8081/pacientes/consulta/cancelada/'+id);
  }
}

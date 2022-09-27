import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(private http:HttpClient) { }
  getHorariosFecha(fecha:any,id:any){
    console.log(fecha+"      "+id);
    return this.http.get<Object>("http://localhost:8081/pacientes/consultas-disponibles?id_atencion="+id+"&fecha="+fecha);
  }
}

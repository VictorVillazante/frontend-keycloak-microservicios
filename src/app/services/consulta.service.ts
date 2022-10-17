import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  obtenerDatosConsultaAdm(idConsulta: any) {
    return this.http.get<Object[]>('http://localhost:8081/adm/datos_consulta_adm/'+idConsulta);
  }

  constructor(private http:HttpClient) { }
  actualizarConsulta(id:any,datos:any){
    console.log("actualizarConsulta");
    console.log(datos);
    return this.http.put<Object[]>('http://localhost:8081/medicos/consulta/detalle/'+id,datos);
  }
}

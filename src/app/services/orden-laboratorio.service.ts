import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdenLaboratorioService {
  eliminarOrdenLaboratorio(idOrden: any) {
    return this.http.delete<any>('http://localhost:8081/medicos/orden-laboratorio/'+idOrden);
  }

  constructor(private http:HttpClient) { }
  obtenerTodasOrdenesLaboratorioPorIdConsulta(idConsulta:any){
    return this.http.get<any>('http://localhost:8081/medicos/consulta/orden-laboratorio/'+idConsulta);
  }
  registrarOrdenLaboratorio(data:any){
    return this.http.post<any>('http://localhost:8081/medicos/orden-laboratorio',data);

  }
}

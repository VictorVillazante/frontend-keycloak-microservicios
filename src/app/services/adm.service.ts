import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmService {
  deshabilitarTraspaso(idTraspaso: any) {
    console.log('http://localhost:8081/adm/hojas-traspaso/deshabilitar/'+idTraspaso);
    return this.http.put<any>('http://localhost:8081/adm/hojas-traspaso/deshabilitar/'+idTraspaso,{});
  }
  habilitarTraspaso(idTraspaso: any) {
    console.log('http://localhost:8081/adm/hojas-traspaso/habilitar/'+idTraspaso);
    return this.http.put<any>('http://localhost:8081/adm/hojas-traspaso/habilitar/'+idTraspaso,{});
  }
  // /hojas-traspaso/habilitar/{id}

  constructor(private http:HttpClient) { }
  cancelarConsulta(id:any){
    return this.http.delete<any>('http://localhost:8081/adm/consulta/'+id);
  }
  getTraspasosFecha(fecha_elegida: any) {
    return this.http.get<any>('http://localhost:8081/adm/hojas-traspaso/'+fecha_elegida);
  }
}

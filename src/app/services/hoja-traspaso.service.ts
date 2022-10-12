import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HojaTraspasoService {
  eliminarHojaTraspaso(idHojaTraspaso: any) {
    return this.http.delete<any>('http://localhost:8081/medicos/hojas-traspaso/'+idHojaTraspaso);
  }

  constructor(private http:HttpClient) { }
  registrarHojaTraspaso(data:any){
    console.log(data);
    return this.http.post<any>('http://localhost:8081/medicos/hojas-traspaso',data);

  }
  obtenerHojasTraspasoPorIdConsulta(id:any){
    return this.http.get<any>('http://localhost:8081/medicos/consulta/hojas-traspaso/'+id);

  }
}

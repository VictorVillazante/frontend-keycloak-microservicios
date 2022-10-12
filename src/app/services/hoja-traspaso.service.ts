import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HojaTraspasoService {

  constructor(private http:HttpClient) { }
  registrarHojaTraspaso(data:any){
    console.log(data);
    return this.http.post<any>('http://localhost:8081/medicos/hojas-traspaso',data);

  }
}

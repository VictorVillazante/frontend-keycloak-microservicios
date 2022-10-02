import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadosConsultas } from '../models/EstadosConsultas';

@Injectable({
  providedIn: 'root'
})
export class EstadosReservaService {

  constructor(private http:HttpClient) { }
  obtenerEstadosConsultas(){
    return this.http.get<EstadosConsultas[]>('http://localhost:8081/medicos/estados-consultas');

  }
}

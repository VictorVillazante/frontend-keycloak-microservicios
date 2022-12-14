import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recetas } from '../models/Recetas';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private http:HttpClient) { }
  obtenerRecetasPorIdConsulta(id:any){
    return this.http.get<Recetas[]>('http://localhost:8081/medicos/consulta/receta/'+id);
  }
  registrarNuevaReceta(receta_nueva:any){
    return this.http.post<Recetas>('http://localhost:8081/medicos/consulta/receta',receta_nueva);
  }
  eliminarRecetaId(id:any){
    return this.http.delete('http://localhost:8081/medicos/consulta/receta/'+id,{responseType: 'text'});
  }
}

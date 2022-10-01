import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicos } from '../models/Medicos';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private http:HttpClient) { }
  getDoctoresEspecialidad(id:any){
    return this.http.get<Medicos[]>('http://localhost:8081/medicos/especialidades/'+id);
  }
  getConsultasMedicoIdFecha(id:any,fecha:any){
    return this.http.get<Medicos[]>('http://localhost:8081/medicos/consultas-dia?id_medico='+id+'&fecha='+fecha);

  }
}

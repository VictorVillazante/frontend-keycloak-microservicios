import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtencionService {
  modificarReserva(id_atencion: any, horario_elegido: any, fecha: string,id_consulta:any) {
    return this.http.put<Object>("http://localhost:8081/pacientes/reservas/"+id_consulta,{
      "id_paciente":1,
      "fecha":fecha,
      "id_horario":horario_elegido,
      "id_estado_consulta":1,
      "id_consultorio":1,
      "id_atencion":id_atencion,
      "informe_consulta":""
    });
  }
  reservar(id_atencion: any, horario_elegido: any, fecha_elegida: any) {
    console.log("reservar")
    let data={
      "id_consultas":null,
      "id_paciente":1,
      "fecha":fecha_elegida,
      "id_horario":horario_elegido,
      "id_estado_consulta":1,
      "id_consultorio":1,
      "id_atencion":id_atencion,
      "informe_consulta":""
    };
    console.log(data);
    return this.http.post<Object>("http://localhost:8081/pacientes/reservas",data);
  }

  constructor(private http:HttpClient) { }
  getAtencion(id_medico:any,id_especialidades:any){
    
    return this.http.get<Object>("http://localhost:8081/medicos/atencion?id_medico="+id_medico+"&id_especialidades="+id_especialidades);
  }
}

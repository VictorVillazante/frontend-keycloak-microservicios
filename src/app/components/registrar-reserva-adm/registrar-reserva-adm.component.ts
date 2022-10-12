import { Component, OnInit } from '@angular/core';
import { Especialidades } from 'src/app/models/Especialidades';
import { Horarios } from 'src/app/models/Horarios';
import { Medicos } from 'src/app/models/Medicos';
import { Pacientes } from 'src/app/models/Pacientes';
import { AtencionService } from 'src/app/services/atencion.service';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { HorariosService } from 'src/app/services/horarios.service';
import { MedicosService } from 'src/app/services/medicos.service';
import { PacienteServiceService } from 'src/app/services/paciente-service.service';

@Component({
  selector: 'app-registrar-reserva-adm',
  templateUrl: './registrar-reserva-adm.component.html',
  styleUrls: ['./registrar-reserva-adm.component.css']
})
export class RegistrarReservaAdmComponent implements OnInit {

  medico_elegido: any;
  especialidad_elegida:any;
  fecha_elegida:any;
  horario_elegido:any;
  id_atencion:any;
  listaEspecialidades:Especialidades[] | undefined;
  listaMedicosDisponibles:Medicos[] | undefined;
  listadoHorariosDisponibles:Horarios[] | undefined;
  listaPacientes:Pacientes[]=[];
  id_paciente:any;
  constructor(private pacienteServiceService:PacienteServiceService,private especialidadesService:EspecialidadesService,private medicosService:MedicosService,private horariosService:HorariosService,private atencionService:AtencionService) { }
  tomorrow:Date | undefined;
  planModel: any;
  ngOnInit(): void {
    this.pacienteServiceService.obtenerTodosPacientes().subscribe((data:any)=>{
      console.log(data);
      this.listaPacientes=data;
    })
    this.especialidadesService.getEspecialidades().subscribe((data:any)=>{
      console.log(data);
      this.listaEspecialidades=data;
      this.especialidad_elegida=this.listaEspecialidades!=null?this.listaEspecialidades[this.listaEspecialidades.length-1].id_especialidades:undefined;
      this.buscarDoctores();
    })
    this.planModel={start_time: new Date() };
    const today =  new Date();
    this.fecha_elegida =  new Date(today.setDate(today.getDate() + 1));
    console.log(this.fecha_elegida);
    this.buscarHorarios();
  }
  establecerPacienteElegido(arg0:any) {
    console.log(arg0.value);
    for(let j=0;j<this.listaPacientes.length;j++){
      if((this.listaPacientes[j].id_paciente+" "+this.listaPacientes[j].nombre).trim()==arg0.value.trim()){
        console.log(this.listaPacientes[j].id_paciente);
        this.id_paciente=this.listaPacientes[j].id_paciente;
      }
    }
  }
  buscarDoctores(){
    console.log("Buscar doctores");
    console.log(this.especialidad_elegida);
    this.medicosService.getDoctoresEspecialidad(this.especialidad_elegida).subscribe((data:any)=>{
      console.log(data);
      this.listaMedicosDisponibles=data;
      this.medico_elegido=this.listaMedicosDisponibles!=null?this.listaMedicosDisponibles[this.listaMedicosDisponibles.length-1].id_medico:undefined;
      this.buscarAtencion();
    })
  }
  buscarHorarios(){
    console.log("Buscar horarios");
    //console.log(this.fecha_elegida.getFullYear()+"-"+this.fecha_elegida.getMonth()+"-"+this.fecha_elegida.getDate());
    let fecha=this.fecha_elegida.getFullYear()+"-"+(this.fecha_elegida.getMonth()+1)+"-"+this.fecha_elegida.getDate();
    this.horariosService.getHorariosFecha(fecha,this.id_atencion).subscribe((data:any)=>{
      console.log(data);
      this.listadoHorariosDisponibles=data;
      this.horario_elegido=this.listadoHorariosDisponibles!=null?this.listadoHorariosDisponibles[this.listadoHorariosDisponibles.length-1].id_horario:undefined;

    })
  }
  buscarAtencion(){
   console.log("Buscar atencion");
   console.log(this.medico_elegido+" "+this.especialidad_elegida);
   this.atencionService.getAtencion(this.medico_elegido,this.especialidad_elegida).subscribe((data:any)=>{
      this.id_atencion=data.toString();
      this.buscarHorarios();
    })
  }
  registrarReserva(){
    console.log(this.id_atencion);
    console.log("horario elegido"+this.horario_elegido);
    console.log(this.fecha_elegida);
    let dia=((this.fecha_elegida.getDate()+1)+"").length==1?"0"+((this.fecha_elegida.getDate()+1)+""):((this.fecha_elegida.getDate()+1)+"");
    let fecha=this.fecha_elegida.getFullYear()+"-"+(((this.fecha_elegida.getMonth()+1)+"").length==2?(this.fecha_elegida.getMonth()+1):"0"+(this.fecha_elegida.getMonth()+1))+"-"+dia;
    console.log(fecha);
    let data={
      "id_consultas":null,
      "id_paciente":this.id_paciente,
      "fecha":fecha,
      "id_horario":this.horario_elegido,
      "id_estado_consulta":1,
      "id_consultorio":1,
      "id_atencion":this.id_atencion,
      "informe_consulta":""
    };
    console.log(data);
    this.atencionService.reservarAtencionJSON(data).subscribe((data:any)=>{
      console.log(data);
    })
  }

}

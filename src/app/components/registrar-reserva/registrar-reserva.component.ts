import { Component, OnInit } from '@angular/core';
import { EspecialidadesService } from '../../services/especialidades.service';
import { Especialidades } from '../../models/Especialidades';
import { FormsModule } from '@angular/forms';
import { MedicosService } from '../../services/medicos.service';
import { Medicos } from 'src/app/models/Medicos';
import { HorariosService } from '../../services/horarios.service';
import { AtencionService } from '../../services/atencion.service';
import { Horarios } from 'src/app/models/Horarios';

@Component({
  selector: 'app-registrar-reserva',
  templateUrl: './registrar-reserva.component.html',
  styleUrls: ['./registrar-reserva.component.css']
})
export class RegistrarReservaComponent implements OnInit {
  medico_elegido: any;
  especialidad_elegida:any;
  fecha_elegida:any;
  horario_elegido:any;
  id_atencion:any;
  listaEspecialidades:Especialidades[] | undefined;
  listaMedicosDisponibles:Medicos[] | undefined;
  listadoHorariosDisponibles:Horarios[] | undefined;
  constructor(private especialidadesService:EspecialidadesService,private medicosService:MedicosService,private horariosService:HorariosService,private atencionService:AtencionService) { }
  tomorrow:Date | undefined;
  planModel: any;
  ngOnInit(): void {
    
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
    this.atencionService.reservar(this.id_atencion,this.horario_elegido,fecha).subscribe((data:any)=>{
      console.log(data);
    })
  }

}

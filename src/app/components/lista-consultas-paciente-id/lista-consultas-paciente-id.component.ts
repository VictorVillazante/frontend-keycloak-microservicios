import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../../services/pacientes.service';
import { ConsultasPacientesId } from '../../models/ConsultasPacientesId';

@Component({
  selector: 'app-lista-consultas-paciente-id',
  templateUrl: './lista-consultas-paciente-id.component.html',
  styleUrls: ['./lista-consultas-paciente-id.component.css']
})
export class ListaConsultasPacienteIdComponent implements OnInit {

    consultas:ConsultasPacientesId[] | undefined;
    constructor(private pacientesService:PacientesService) { }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.cargarConsultas();
  }  
  cancelarConsulta(id:any) {
    this.pacientesService.cancelarConsulta(id).subscribe((data:any)=>{
      console.log(data);
      window.alert("Consulta cancelada "+id);
      this.cargarConsultas();
      // if(data){
      //   window.alert("No se encontraron consultas");
      // }
    })
  }
    
  cargarConsultas() {
    this.pacientesService.getConsultas(903).subscribe((data:any)=>{
      console.log(data);
      this.consultas=data;
      if(this.consultas?.length==0){
        window.alert("No se encontraron consultas");
      }
    })  
  }
}



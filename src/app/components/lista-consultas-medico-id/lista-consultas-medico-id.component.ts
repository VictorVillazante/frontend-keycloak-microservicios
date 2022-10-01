import { Component, OnInit } from '@angular/core';
import { ConsultasMedicoFechaId } from 'src/app/models/ConsultasMedicoFechaId';
import { MedicosService } from '../../services/medicos.service';

@Component({
  selector: 'app-lista-consultas-medico-id',
  templateUrl: './lista-consultas-medico-id.component.html',
  styleUrls: ['./lista-consultas-medico-id.component.css']
})
export class ListaConsultasMedicoIdComponent implements OnInit {
  id:any=3;
  listadoConsultas:ConsultasMedicoFechaId[]=[];
  fecha_elegida:any="2022-09-25";
  constructor(private medicosService:MedicosService) { }

  ngOnInit(): void {
    const today =  new Date();
    let dia=((today.getDate()+"").length==1)?"0"+today.getDate():today.getDate();
    console.log(dia);
    console.log(today.getFullYear()+"-"+(today.getMonth()+1)+"-"+dia);
    let hoy=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+dia;
    this.fecha_elegida=hoy;
   this.buscarConsultasMedicoFecha();
  }
  buscarConsultasMedicoFecha(){
    this.medicosService.getConsultasMedicoIdFecha(this.id,this.fecha_elegida).subscribe((data:any)=>{
      this.listadoConsultas=data;
    })
  }
  buscarConsultas(){
    console.log(this.fecha_elegida);
    this.buscarConsultasMedicoFecha();
  }
  
}

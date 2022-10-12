import { Component, OnInit } from '@angular/core';
import { ConsultasMedicoFechaId } from 'src/app/models/ConsultasMedicoFechaId';
import { AdmService } from 'src/app/services/adm.service';
import { MedicosService } from 'src/app/services/medicos.service';

@Component({
  selector: 'app-listado-reservas-adm',
  templateUrl: './listado-reservas-adm.component.html',
  styleUrls: ['./listado-reservas-adm.component.css']
})
export class ListadoReservasAdmComponent implements OnInit {
  id:any=3;
  listadoConsultas:any[]=[];
  fecha_elegida:any="2022-09-25";
  constructor(private admService:AdmService,private medicosService:MedicosService) { }

  ngOnInit(): void {
    const today =  new Date();
    let dia=((today.getDate()+"").length==1)?"0"+today.getDate():today.getDate();
    console.log(dia);
    console.log(today.getFullYear()+"-"+(today.getMonth()+1)+"-"+dia);
    let hoy=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+dia;
    this.fecha_elegida=hoy;
   this.buscarConsultasFecha();
  }
  buscarConsultasFecha(){
    this.medicosService.getConsultasFecha(this.fecha_elegida).subscribe((data:any)=>{
      this.listadoConsultas=data;
    })
  }
  buscarConsultas(){
    console.log(this.fecha_elegida);
    this.buscarConsultasFecha();
  }
  eliminarConsulta(id:any){
    this.admService.cancelarConsulta(id).subscribe((data:any)=>{
      this.buscarConsultasFecha();

    })
  }
}

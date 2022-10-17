import { Component, OnInit } from '@angular/core';
import { AdmService } from 'src/app/services/adm.service';

@Component({
  selector: 'app-listado-traspasos',
  templateUrl: './listado-traspasos.component.html',
  styleUrls: ['./listado-traspasos.component.css']
})
export class ListadoTraspasosComponent implements OnInit {

  id:any=3;
  listadoTraspasos:any[]=[];
  fecha_elegida:any="2022-09-25";
  constructor(private admService:AdmService) { }

  ngOnInit(): void {
    const today =  new Date();
    let dia=(((today.getDate()+1)+"").length==1)?"0"+(today.getDate()+1):(today.getDate()+1);
    console.log(dia);
    console.log(today.getFullYear()+"-"+(today.getMonth()+1)+"-"+dia);
    let hoy=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+dia;
    this.fecha_elegida=hoy;
    console.log("fecha a revisar "+this.fecha_elegida)
    this.buscarTraspasos()
  }
  buscarTraspasos(){  
    this.admService.getTraspasosFecha(this.fecha_elegida).subscribe((data:any)=>{
      console.log(data);
      this.listadoTraspasos=data;
    })
  }
  cambiarEstadoAceptado(idTraspaso:any){
    this.admService.habilitarTraspaso(idTraspaso).subscribe((data:any)=>{
      this.buscarTraspasos();

    }) 
  }
  cambiarEstadoRechazado(idTraspaso:any){
    this.admService.deshabilitarTraspaso(idTraspaso).subscribe((data:any)=>{
      this.buscarTraspasos();

    })
  }
}

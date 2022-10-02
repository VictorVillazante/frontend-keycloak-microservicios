import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstadosConsultas } from 'src/app/models/EstadosConsultas';
import { RecetasService } from 'src/app/services/recetas.service';
import { EstadosReservaService } from '../../services/estados-reserva.service';
import { Recetas } from '../../models/Recetas';

@Component({
  selector: 'app-datos-consulta',
  templateUrl: './datos-consulta.component.html',
  styleUrls: ['./datos-consulta.component.css']
})
export class DatosConsultaComponent implements OnInit {

  listadoEstados:EstadosConsultas[]=[];
  constructor(private activatedRoute:ActivatedRoute,private estadosReservaService:EstadosReservaService,private recetasService:RecetasService) { }
  idConsulta:any;
  listadoRecetas:Recetas[]=[];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      console.log(params['id'])
      this.idConsulta=params['id'];
    });
    this.estadosReservaService.obtenerEstadosConsultas().subscribe((data:any)=>{
      console.log(data);
      this.listadoEstados=data;
    })
    this.obtenerRecetasPorIdConsulta();
  }
  obtenerRecetasPorIdConsulta(){
    this.recetasService.obtenerRecetasPorIdConsulta(this.idConsulta).subscribe((data:any)=>{
      console.log(data);
      this.listadoRecetas=data;
    })
  }
  eliminarReceta(id:any){
    console.log(id);
    this.recetasService.eliminarRecetaId(id).subscribe((data:any)=>{
      this.obtenerRecetasPorIdConsulta();
    })
  }


}

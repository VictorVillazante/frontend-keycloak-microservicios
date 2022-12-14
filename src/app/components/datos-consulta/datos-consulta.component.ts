import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstadosConsultas } from 'src/app/models/EstadosConsultas';
import { RecetasService } from 'src/app/services/recetas.service';
import { EstadosReservaService } from '../../services/estados-reserva.service';
import { Recetas } from '../../models/Recetas';
import { ConsultaService } from 'src/app/services/consulta.service';
import { OrdenLaboratorioService } from 'src/app/services/orden-laboratorio.service';
import { OrdenesLaboratorio } from 'src/app/models/OrdenesLaboratorio';
import { HojaTraspasoService } from 'src/app/services/hoja-traspaso.service';
import { HojasTraspaso } from '../../models/HojasTraspaso';

@Component({
  selector: 'app-datos-consulta',
  templateUrl: './datos-consulta.component.html',
  styleUrls: ['./datos-consulta.component.css']
})
export class DatosConsultaComponent implements OnInit {


  listadoEstados:EstadosConsultas[]=[];
  constructor(private hojaTraspasoService:HojaTraspasoService,private ordenLaboratorioService:OrdenLaboratorioService,private activatedRoute:ActivatedRoute,private consultaService:ConsultaService,private estadosReservaService:EstadosReservaService,private recetasService:RecetasService) { }
  idConsulta:any;
  listadoRecetas:Recetas[]=[];
  estado_elegido:any;
  descripcion_consulta:any;
  listadoOrdenLaboratorio:OrdenesLaboratorio[]=[];
  listadoTraspasos:HojasTraspaso[]=[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      console.log(params['id'])
      this.idConsulta=params['id'];
    });
    this.estadosReservaService.obtenerEstadosConsultas().subscribe((data:any)=>{
      console.log(data);
      this.listadoEstados=data;
    })
    this.obtenerOrdenesLaboratorioPorIdConsulta();
    this.obtenerRecetasPorIdConsulta();
    this.obtenerHojasTraspasoIdConsulta();
  }
  obtenerHojasTraspasoIdConsulta() {
    this.hojaTraspasoService.obtenerHojasTraspasoPorIdConsulta(this.idConsulta).subscribe((data:any)=>{
      console.log(data);
      this.listadoTraspasos=data;
    })  
  }
  obtenerOrdenesLaboratorioPorIdConsulta(){
    this.ordenLaboratorioService.obtenerTodasOrdenesLaboratorioPorIdConsulta(this.idConsulta).subscribe((data:any)=>{
      console.log(data);
      this.listadoOrdenLaboratorio=data;
    })
  }
  eliminarOrdenLaboratorio(idOrden:any){
    console.log(idOrden);
    this.ordenLaboratorioService.eliminarOrdenLaboratorio(idOrden).subscribe((data:any)=>{
      console.log(data);
      this.obtenerOrdenesLaboratorioPorIdConsulta();
    })
  }
  eliminarHojaTraspaso(idHojaTraspaso: any) {
    this.hojaTraspasoService.eliminarHojaTraspaso(idHojaTraspaso).subscribe((data:any)=>{
      console.log(data);
      this.obtenerHojasTraspasoIdConsulta();
    })  
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
  registrarCambios(){
    let datos={
      "id_estado_consulta":this.estado_elegido,
      "informe_consulta":this.descripcion_consulta
    }
    console.log(datos);
    this.consultaService.actualizarConsulta(this.idConsulta,datos).subscribe((data:any)=>{
    })
  }
}

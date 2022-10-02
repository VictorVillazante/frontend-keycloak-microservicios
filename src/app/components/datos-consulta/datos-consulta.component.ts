import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstadosConsultas } from 'src/app/models/EstadosConsultas';
import { EstadosReservaService } from '../../services/estados-reserva.service';

@Component({
  selector: 'app-datos-consulta',
  templateUrl: './datos-consulta.component.html',
  styleUrls: ['./datos-consulta.component.css']
})
export class DatosConsultaComponent implements OnInit {

  listadoEstados:EstadosConsultas[]=[];
  constructor(private activatedRoute:ActivatedRoute,private estadosReservaService:EstadosReservaService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      console.log(params['id'])
    });
    this.estadosReservaService.obtenerEstadosConsultas().subscribe((data:any)=>{
      console.log(data);
      this.listadoEstados=data;
    })
  }


}

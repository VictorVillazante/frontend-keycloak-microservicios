import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdenLaboratorioService } from 'src/app/services/orden-laboratorio.service';

@Component({
  selector: 'app-registrar-orden-laboratorio',
  templateUrl: './registrar-orden-laboratorio.component.html',
  styleUrls: ['./registrar-orden-laboratorio.component.css']
})
export class RegistrarOrdenLaboratorioComponent implements OnInit {
  descripcion:any;
  id_consulta:any;
  constructor(private activatedRoute:ActivatedRoute,private ordenLaboratorioService:OrdenLaboratorioService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      console.log(params['id'])
      this.id_consulta=params['id'];
    });
  }
  registrarOrdenLaboratorio(){
    let data:any={
      "id_orden_laboratorio":null,
      "id_consultas":this.id_consulta,
      "descripcion":this.descripcion
    }
    this.ordenLaboratorioService.registrarOrdenLaboratorio(data).subscribe((data:any)=>{
      console.log(data);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetasService } from '../../services/recetas.service';

@Component({
  selector: 'app-agregar-receta',
  templateUrl: './agregar-receta.component.html',
  styleUrls: ['./agregar-receta.component.css']
})
export class AgregarRecetaComponent implements OnInit {

  titulo:any;
  descripcion:any;
  habilitado:any;
  idConsulta:any;
  constructor(private activatedRoute:ActivatedRoute,private recetasService:RecetasService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      console.log(params['id'])
      this.idConsulta=params['id'];
    });
  }
  agregarReceta(){
    let nuevaReceta={
      "id_receta":null,
      "titulo":this.titulo,
      "descripcion":this.descripcion,
      "habilitado_recogo":(this.habilitado)?1:0,
      "id_consultas":this.idConsulta
    }
    console.log(nuevaReceta);
    this.recetasService.registrarNuevaReceta(nuevaReceta).subscribe((data:any)=>{
      console.log(data);
    })
  }

}

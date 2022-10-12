import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HojaTraspasoService } from '../../services/hoja-traspaso.service';

@Component({
  selector: 'app-registrar-traspaso',
  templateUrl: './registrar-traspaso.component.html',
  styleUrls: ['./registrar-traspaso.component.css']
})
export class RegistrarTraspasoComponent implements OnInit {

  examen_clinico:any="";
  diagnostico_presuntivo:any="";
  id_consulta:any;
  constructor(private hojasTraspasoService:HojaTraspasoService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      console.log(params['id'])
      this.id_consulta=params['id'];
    });
  }
  registrarHojaTraspaso(){
    let data:any={
      "id_hoja_traspaso":null,
      "examen_clinico":this.examen_clinico,
      "diagnostico_presuntivo":this.diagnostico_presuntivo,
      "id_consultas":this.id_consulta
    }
    this.hojasTraspasoService.registrarHojaTraspaso(data).subscribe((data:any)=>{
      console.log(data);
    })
  }
}

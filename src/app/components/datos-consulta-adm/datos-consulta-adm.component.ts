import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-datos-consulta-adm',
  templateUrl: './datos-consulta-adm.component.html',
  styleUrls: ['./datos-consulta-adm.component.css']
})
export class DatosConsultaAdmComponent implements OnInit {

  idConsulta:any;
  datos:any;
  constructor(private consultaService:ConsultaService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      console.log(params['id'])
      this.idConsulta=params['id'];
    });
    this.consultaService.obtenerDatosConsultaAdm(this.idConsulta).subscribe((data:any)=>{
      console.log(data);
      this.datos=data;
    })
  }

}

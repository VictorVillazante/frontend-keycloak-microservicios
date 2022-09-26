import { Component, OnInit } from '@angular/core';
import { EspecialidadesService } from '../../services/especialidades.service';
import { Especialidades } from '../../models/Especialidades';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar-reserva',
  templateUrl: './registrar-reserva.component.html',
  styleUrls: ['./registrar-reserva.component.css']
})
export class RegistrarReservaComponent implements OnInit {
  especialidad_elegida:any;
  tipo_act:any;
  constructor(private especialidadesService:EspecialidadesService) { }
  listaEspecialidades:Especialidades[] | undefined;
  ngOnInit(): void {
    this.especialidadesService.getEspecialidades().subscribe((data:any)=>{
      console.log(data);
      this.listaEspecialidades=data;
    })
  }
  buscarDoctores(valor:any){
    console.log("Buscar doctores");
    console.log(this.especialidad_elegida);
  }

}

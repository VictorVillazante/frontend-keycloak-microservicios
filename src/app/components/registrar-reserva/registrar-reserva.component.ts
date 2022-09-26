import { Component, OnInit } from '@angular/core';
import { EspecialidadesService } from '../../services/especialidades.service';
import { Especialidades } from '../../models/Especialidades';
import { FormsModule } from '@angular/forms';
import { MedicosService } from '../../services/medicos.service';
import { Medicos } from '../../models/Medicos';

@Component({
  selector: 'app-registrar-reserva',
  templateUrl: './registrar-reserva.component.html',
  styleUrls: ['./registrar-reserva.component.css']
})
export class RegistrarReservaComponent implements OnInit {
  especialidad_elegida:any;
  medico_elegido:any;
  buscarDoctores(){
    console.log(this.especialidad_elegida);
    this.medicosService.getMedicosPorEspecialidadId(this.especialidad_elegida).subscribe((data:any)=>{
      console.log(data);
      this.listaMedicosEspecialidad=data;
    })
  }
  constructor(private especialidadesService:EspecialidadesService,private medicosService:MedicosService) { }
  listaMedicosEspecialidad:Medicos[] | undefined;
  listaEspecialidades:Especialidades[] | undefined;
  ngOnInit(): void {
    this.especialidadesService.getEspecialidades().subscribe((data:any)=>{
      console.log(data);
      this.listaEspecialidades=data;
    })
  }
  

}

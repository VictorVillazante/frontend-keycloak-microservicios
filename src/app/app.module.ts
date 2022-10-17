import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaConsultasPacienteIdComponent } from './components/lista-consultas-paciente-id/lista-consultas-paciente-id.component';
import { MenuPacienteComponent } from './components/menu-paciente/menu-paciente.component';
import { RegistrarReservaComponent } from './components/registrar-reserva/registrar-reserva.component';
import { APP_ROUTING } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatNativeDateModule } from '@angular/material/core';
import { FormControl, FormsModule } from '@angular/forms';
import { MenuAdmComponent } from './components/menu-adm/menu-adm.component';
import { MenuMedicoComponent } from './components/menu-medico/menu-medico.component';
import { ModificarReservaComponent } from './components/modificar-reserva/modificar-reserva.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { ListaConsultasMedicoIdComponent } from './components/lista-consultas-medico-id/lista-consultas-medico-id.component';
import { DatosConsultaComponent } from './components/datos-consulta/datos-consulta.component';
import { AgregarRecetaComponent } from './components/agregar-receta/agregar-receta.component';
import { RegistrarTraspasoComponent } from './components/registrar-traspaso/registrar-traspaso.component';
import { RegistrarOrdenLaboratorioComponent } from './components/registrar-orden-laboratorio/registrar-orden-laboratorio.component';
import { RegistrarReservaAdmComponent } from './components/registrar-reserva-adm/registrar-reserva-adm.component';
import { ListadoReservasAdmComponent } from './components/listado-reservas-adm/listado-reservas-adm.component';
import { ListadoTraspasosComponent } from './components/listado-traspasos/listado-traspasos.component';
import { VerDatosPacienteComponent } from './components/ver-datos-paciente/ver-datos-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaConsultasPacienteIdComponent,
    MenuPacienteComponent,
    RegistrarReservaComponent,
    MenuAdmComponent,
    MenuMedicoComponent,
    ModificarReservaComponent,
    PaginaPrincipalComponent,
    ListaConsultasMedicoIdComponent,
    DatosConsultaComponent,
    AgregarRecetaComponent,
    RegistrarTraspasoComponent,
    RegistrarOrdenLaboratorioComponent,
    RegistrarReservaAdmComponent,
    ListadoReservasAdmComponent,
    ListadoTraspasosComponent,
    VerDatosPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

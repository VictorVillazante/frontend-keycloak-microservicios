import { RouterModule, Routes } from "@angular/router";
import { ListaConsultasPacienteIdComponent } from './components/lista-consultas-paciente-id/lista-consultas-paciente-id.component';
import { MenuPacienteComponent } from "./components/menu-paciente/menu-paciente.component";
import { RegistrarReservaComponent } from './components/registrar-reserva/registrar-reserva.component';

const APP_ROUTES: Routes = [ 
    { path: 'consultas', component:  ListaConsultasPacienteIdComponent},
    { path: 'menu-paciente', component:  MenuPacienteComponent},
    { path: 'registrar-reserva', component:  RegistrarReservaComponent}

];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: false});

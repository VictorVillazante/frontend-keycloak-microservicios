import { RouterModule, Routes } from "@angular/router";
import { ListaConsultasPacienteIdComponent } from './components/lista-consultas-paciente-id/lista-consultas-paciente-id.component';
import { MenuPacienteComponent } from "./components/menu-paciente/menu-paciente.component";
import { RegistrarReservaComponent } from './components/registrar-reserva/registrar-reserva.component';
import { MenuAdmComponent } from './components/menu-adm/menu-adm.component';
import { MenuMedicoComponent } from './components/menu-medico/menu-medico.component';
import { ModificarReservaComponent } from './components/modificar-reserva/modificar-reserva.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { ListaConsultasMedicoIdComponent } from "./components/lista-consultas-medico-id/lista-consultas-medico-id.component";

const APP_ROUTES: Routes = [ 
    { path: '', component:  PaginaPrincipalComponent},
    { path: 'consultas', component:  ListaConsultasPacienteIdComponent},
    { path: 'consultas-medico', component:  ListaConsultasMedicoIdComponent},
    { path: 'menu-paciente', component:  MenuPacienteComponent},
    { path: 'menu-adm', component:  MenuAdmComponent},
    { path: 'menu-medico', component:  MenuMedicoComponent},
    { path: 'consultas/modificar-reserva/:id', component:  ModificarReservaComponent},
    { path: 'registrar-reserva', component:  RegistrarReservaComponent}

];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: false});

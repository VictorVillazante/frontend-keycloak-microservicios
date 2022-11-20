import { RouterModule, Routes } from "@angular/router";
import { ListaConsultasPacienteIdComponent } from './components/lista-consultas-paciente-id/lista-consultas-paciente-id.component';
import { MenuPacienteComponent } from "./components/menu-paciente/menu-paciente.component";
import { RegistrarReservaComponent } from './components/registrar-reserva/registrar-reserva.component';
import { MenuAdmComponent } from './components/menu-adm/menu-adm.component';
import { MenuMedicoComponent } from './components/menu-medico/menu-medico.component';
import { ModificarReservaComponent } from './components/modificar-reserva/modificar-reserva.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { ListaConsultasMedicoIdComponent } from "./components/lista-consultas-medico-id/lista-consultas-medico-id.component";
import { DatosConsultaComponent } from './components/datos-consulta/datos-consulta.component';
import { AgregarRecetaComponent } from './components/agregar-receta/agregar-receta.component';
import { RegistrarTraspasoComponent } from './components/registrar-traspaso/registrar-traspaso.component';
import { RegistrarOrdenLaboratorioComponent } from './components/registrar-orden-laboratorio/registrar-orden-laboratorio.component';
import { RegistrarReservaAdmComponent } from './components/registrar-reserva-adm/registrar-reserva-adm.component';
import { ListadoReservasAdmComponent } from './components/listado-reservas-adm/listado-reservas-adm.component';
import { ListadoTraspasosComponent } from './components/listado-traspasos/listado-traspasos.component';
import { DatosConsultaAdmComponent } from './components/datos-consulta-adm/datos-consulta-adm.component';
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { AppGuard } from "./guard/app.auth";

const APP_ROUTES: Routes = [ 
    { path: '', component:  PaginaPrincipalComponent,canActivate:[AppGuard],data:{roles:[]}},
    { path: 'consultas', component:  ListaConsultasPacienteIdComponent},
    {   
        path: 'consultas-medico', 
        component:  ListaConsultasMedicoIdComponent,
    },
    { path: 'llenar-datos-consulta/:id', component:  DatosConsultaComponent},
    { path: 'llenar-datos-consulta/registrar-traspaso/:id', component:  RegistrarTraspasoComponent},
    { path: 'llenar-datos-consulta/orden-laboratorio/:id', component:  RegistrarOrdenLaboratorioComponent},

    { path: 'receta-consulta/:id', component:  AgregarRecetaComponent},
    { path: 'menu-paciente', component:  MenuPacienteComponent,canActivate:[AppGuard],data:{roles:[]}},
    { path: 'menu-adm', component:  MenuAdmComponent,canActivate:[AppGuard],data:{roles:['ADMINISTRADOR']}},
    { path: 'menu-medico', component:  MenuMedicoComponent,canActivate:[AppGuard],data:{roles:['MEDICO']}},
    { path: 'consultas/modificar-reserva/:id', component:  ModificarReservaComponent},
    { path: 'registrar-reserva', component:  RegistrarReservaComponent},
    
    { path: 'adm/listado-reserva', component:  ListadoReservasAdmComponent},
    { path: 'adm/registrar-reserva', component:  RegistrarReservaAdmComponent},
    { path: 'adm/listado-traspasos', component:  ListadoTraspasosComponent},
    { path: 'adm/ver-datos-consulta/:id', component:  DatosConsultaAdmComponent},
    { path: 'notfound', component:NotfoundComponent},



];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: false});

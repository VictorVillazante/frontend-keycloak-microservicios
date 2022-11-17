import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
    providedIn: 'root'
  })
export class AppGuard extends KeycloakAuthGuard {
    constructor(protected override router: Router, protected service: KeycloakService) {
        super(router, service);
      }
  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree>{
    return new Promise(async (response, reject) => {
      console.log("auth")
        console.log(route.data['roles']);
        console.log(this.roles);
      const rolesRequeridos = route.data['roles'];
      if (!this.authenticated) {
        this.keycloakAngular.login();
        return;
      }
      let granted = false;
      if (!rolesRequeridos || rolesRequeridos.length === 0) {
        granted = true;
      } else {
        for (let rolesRequerido of rolesRequeridos) {
          if (this.roles.indexOf(rolesRequerido) > -1) {
            granted = true;
            break;
          }
        }
      }
      if (granted === false) {
        const error = {
          status: 401,
          error: 'No cuenta con los permisos!!!',
          statusCode: 401,
        };
        this.router.navigate(['notfound'], { queryParams: { exception: error } });
      }
      console.log("granted"+granted)
      response(granted);
    });
  }
  
}

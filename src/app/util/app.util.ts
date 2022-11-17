import { KeycloakService } from "keycloak-angular";
import { environment } from "src/environments/environment";

export function initializeKeycloak(keycloak: KeycloakService):()=>Promise<any>{
    return ():Promise<any>=>{
        return new Promise<void>(async (resolve,reject)=>{
            console.log("initializer")
            const { keycloakConfig } = environment;
            try{    
                await keycloak.init({       
                    config: keycloakConfig,
                    initOptions: {
                        onLoad: 'login-required',
                        checkLoginIframe:false
                    },
                    bearerExcludedUrls:[]
                });
                resolve();
            }catch(e){
                reject(e);
            }
        });
    };
}
import { KeycloakConfig } from "keycloak-js";

const keycloakConfig:KeycloakConfig={
  url:'http://localhost:8080/auth',
  realm:'Hospital',
  clientId:'frontend-hospital'
}
export const environment = {
  production: true,
  keycloakConfig
};

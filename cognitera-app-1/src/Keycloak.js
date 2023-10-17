import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080/auth",
 realm: "cognitera-apps",
 clientId: "cognitera-app-1",
});

export default keycloak;

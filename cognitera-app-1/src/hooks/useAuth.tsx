import React, { useState, useEffect, useRef } from 'react';
import Keycloak from 'keycloak-js';

import KeycloakConfig from "../keycloak.json";

const client = new Keycloak(KeycloakConfig);
client.init({});

export const useAuth = () => {

  const [token  , setToken] = useState<string | undefined>( undefined );
  const [isLogin, setLogin] = useState<boolean           >( false     );

  useEffect(() => {
    if (token===undefined) {
      const x: Promise<void> = client.login();
      x.then(()=>{
        throw 43;
        console.log(`ifigenia Keycloak token is: ${client.token}`);
        if (client.token) {
          setToken(client.token);
          setLogin(true);
        }
      }).catch((err)=>{
        throw 44;
        console.error(`ifigenia error: `, err);
      });
    } else {
    }
  }, []);

  return [isLogin, token];
};



import React from "react";
import { Redirect, Route } from "react-router";
import ValidaRol from "../Validacion/ValidaRol";
import { i } from "../Validacion/ValidaRol";

//Validacion de Usuario Administrador
let auth = true;
if (i === "rol2") {
  auth = true;
} else {
  auth = false;
}

const Rol2 = ({ component: Component, ...rest }) => {
  <ValidaRol />;
  if (i === "rol2") {
    return (
      <Route {...rest}>
        {auth ? <Component /> : <Redirect to="/no-found" />}{" "}
      </Route>
    );
  } else {
    return null;
  }
};

export default Rol2;

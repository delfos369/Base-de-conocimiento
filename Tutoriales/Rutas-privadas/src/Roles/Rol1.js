import React from "react";
import { Redirect, Route } from "react-router";
import ValidaRol from "../Validacion/ValidaRol";
import { i } from "../Validacion/ValidaRol";

//Validacion de Usuario Administrador
let auth = true;
if (i === "rol1") {
  auth = true;
} else {
  auth = false;
}

const Rol1 = ({ component: Component, ...rest }) => {
  <ValidaRol />;

  if (i === "rol1") {
    return (
      <Route {...rest}>
        {auth ? <Component /> : <Redirect to="/no-found" />}{" "}
      </Route>
    );
  } else {
    return null;
  }
};

export default Rol1;

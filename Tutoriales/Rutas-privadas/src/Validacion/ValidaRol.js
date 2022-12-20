import React from "react";
export let i = "";


/* Variable que indica el rol entrará, en dado caso de no coincidir entrará al menú publico */
export let validator = 'rol1';  

export function verificaRol() {

    if (validator === "rol1") {
        i = "rol1";
    } else if (validator === "rol2") {
        i = "rol2";
    }  else {
        i = "public";
    }
}
verificaRol();



export default class ValidaUsuario extends React.Component {
    render() {


        if (this.state.rol[0] === "admin") {
            //   console.log("soy admin");
            return (
                <div>
                    <h1>Hola Admin</h1>
                </div>
            )
        } else if (this.state.rol[0] === "preventa") {
            //    console.log("Soy Preventa");

            return (
                <div>
                    <h1>Hola Preventa</h1>
                </div>
            )
        } else if (this.state.rol[0] === "venta") {
            //   console.log("Soy de Ventas");

            return (
                <div>
                    <h1>Hola Ventas</h1>
                </div>
            )
        } else if (this.state.rol[0] === "direccion") {
            console.log("Soy de Dirección");

            return (
                <div>
                    <h1>Hola Direccion</h1>
                </div>
            )
        }

        else {
            console.log("ERROR");
            return (
                <div>
                    <h1>Existe un Error;</h1>
                </div>
            )

        }

    }

}
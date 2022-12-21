/* ValidaRol.jsx*/

import React from "react";
export let i = "" ; /* Variable para comparar tipo de rol*/
export let validator = "rol2" ; /* Variable que identifica el rol logueado*/
export function verificaRol(){
if ( validator === "rol" ) {
i = "rol1" ;
} else if ( validator === "rol2" ) {
i = "rol2" ;
} else {
i = "public" ;
}
}
verificaRol();

export default class ValidaUsuario extends React.Component {
render() {
return (
< > </>
)
}
}
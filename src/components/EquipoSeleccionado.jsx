import React from "react"
import Titulares from "./Titulares";
import Suplentes from "./Suplentes";

// declaramos la funcion constante igual a una funcion que retorne section
// que contengga 2 componentes
const EquipoSeleccionado = () => (
    <section>
        <Titulares />
        <Suplentes />
    </section>
)

export default EquipoSeleccionado
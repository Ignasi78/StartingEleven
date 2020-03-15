import React from "react"
import { connect } from "react-redux"

const Jugadores = ({jugadores, agregarTitular, agregarSuplente}) => (
    <section>
        <h2>Plantilla</h2>
        <div className="contenedor-jugadores">
            {
                jugadores.map(j =>(
                    <article className="jugador" key={j.id}>
                        <img src={j.foto} alt={j.nombre}/>
                        <h4>{j.nombre}</h4>
                        <div>                            
                            <button onClick={() => agregarTitular(j)}>Titular</button>
                            <span> </span>
                            <button onClick={() => agregarSuplente(j)}>Suplente</button>
                        </div>                        
                    </article>        
                ))
            }            
        </div>
    </section>
)

// declaramos como constante la funcion que mapea lo que tengo en el estado
const mapStateToProps = state => ({
    jugadores: state.jugadores
})

// declaramos como constante la funcion que recibe un dispatch y retorna vacio
const mapDispatchToProps = dispatch => ({
    agregarTitular(jugador) {
        dispatch({
            type: "AGREGAR_TITULAR",
            jugador
        })
    },
    agregarSuplente(jugador) {
        dispatch({
            type: "AGREGAR_SUPLENTE",
            jugador
        })
    }
})

// funcion connect (importada de Redux) para conectar al array de Jugadores para leer Datos
// recibe los datos, la constante Jugadores (mi componente)
// se le pasan 2 funciones: una mapea lo que tengo en estado y convierte en propiedades
// la segunda mapea las funciones dispatches y las convierte en propiedades
export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)

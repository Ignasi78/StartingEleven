import React from "react"
import { connect } from "react-redux";

const Titulares = ({titulares, quitarTitular}) => (
    <section>
        <h2>Titulares</h2>
        <div className="cancha">
            {
                titulares.map(j => (
                    <article className="titular" key={j.id}>
                        <div>
                            <img src={j.foto} alt={j.nombre}/>
                            <button onClick={() => quitarTitular(j)}>X</button>
                        </div>
                        <h4>{j.nombre}</h4>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    titulares: state.titulares
})

//definimos las acciones-funciones
const mapDispatchToProps = dispatch => ({
    quitarTitular(jugador) {
        // va a retornar un dispatch que mande un objeto con 2 elem:  acción y jugador
        dispatch({
            type: "QUITAR_TITULAR",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)

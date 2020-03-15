import React from "react"
import { connect } from "react-redux";

const Suplentes = ({suplentes, quitarSuplente}) => (
    <section>
        <h2>Suplentes</h2>
        <div className="cancha">
            {
                suplentes.map(j => (
                    <article className="suplente" key={j.id}>
                        <div>
                            <img src={j.foto} alt={j.nombre}/>
                            <button onClick={() => quitarSuplente(j)}>X</button>
                        </div>
                        <h4>{j.nombre}</h4>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({
    quitarSuplente(jugador) {
        dispatch({
            type: "QUITAR_SUPLENTE",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)

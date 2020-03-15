import { createStore } from "redux"

const initialState = {
    jugadores: [{
        id: 1,
        nombre: "1. Ter Stegen",
        foto: "https://imgur.com/aF56dKt"
    },
    {
        id: 2,
        nombre: "2. Semedo",
        foto: "https://imgur.com/y46lrxg"
    },
    {
        id: 3,
        nombre: "3. G. Piqué",
        foto: "https://imgur.com/84MDjeX"
    },
    {
        id: 4,
        nombre: "4. I. Rakitic",
        foto: "https://imgur.com/51Ygl73"
    },
    {
        id: 5,
        nombre: "5. Sergio B.",
        foto: "https://imgur.com/5ZGXE3G"
    },
    {
        id: 8,
        nombre: "8. Arthur M.",
        foto: "https://imgur.com/rJnKotJ"
    },
    {
        id: 9,
        nombre: "9. L. Suarez",
        foto: "https://imgur.com/bhytv8l"
    },
    {
        id: 10,
        nombre: "10. Leo Messi",
        foto: "https://imgur.com/BAl25nP"
    },
    {
        id: 11,
        nombre: "11. Dembele",
        foto: "https://imgur.com/esSlGsO"
    },
    {
        id: 13,
        nombre: "13. Neto M.",
        foto: "https://imgur.com/KwCZP4y"
    },
    {
        id: 15,
        nombre: "15. Lenglet",
        foto: "https://imgur.com/RWUcLxP"
    },
    {
        id: 17,
        nombre: "17. Griezman",
        foto: "https://imgur.com/sgpTOND"
    },
    {
        id: 18,
        nombre: "18. J.Alba",
        foto: "https://imgur.com/0WDZklS"
    },
    {
        id: 19,
        nombre: "19.Braithwaite",
        foto: "https://imgur.com/ZZWVRS7"
    },
    {
        id: 20,
        nombre: "20. S.Roberto",
        foto: "https://imgur.com/SH5s2lN"
    },
    {
        id: 21,
        nombre: "21. F.De Jong",
        foto: "https://imgur.com/7339vkh"
    },
    {
        id: 22,
        nombre: "22. Ar. Vidal",
        foto: "https://imgur.com/CyQV54L"
    },
    {
        id: 23,
        nombre: "23. S.Umtiti",
        foto: "https://imgur.com/1x2gbDW"
    },
    {
        id: 24,
        nombre: "24. Jr Firpo",
        foto: "https://imgur.com/2jKBROQ"
    },
    {
        id: 28,
        nombre: "28. Riqui Puig",
        foto: "https://imgur.com/AFfs1X4"
    },
    {
        id: 31,
        nombre: "31. Ansu Fati",
        foto: "https://imgur.com/sGsfCRS"
    }],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state=initialState, action) => {
    console.log(action)

    if (action.type === "AGREGAR_TITULAR") {
        return {
            // con ... añadimos al estado y luego concatenamos pq sino reemplazaria
            ...state,
            titulares: state.titulares.concat(action.jugador),
            // control para evitar que pueda añadir repetido el mismo jugador
            // decidimos filtrar-quitar de la lista de elegibles el que sea titular
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if (action.type === "AGREGAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if (action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            // ahora filtramos los titulares, es decir accion inversa a antes
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if (action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            // ahora filtramos los titulares, es decir accion inversa a antes
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state 
}

export default createStore(reducerEntrenador)
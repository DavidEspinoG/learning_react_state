import React from 'react'
import { reducer } from './reducer';
const SECURITY_CODE = 'paradigma'

const initialState = {
    value: '', 
    error: false, 
    loading: false, 
    deleted: false, 
    confirmed: false
}
const actionTypes = {
    confirm: 'CONFIRM', 
    error: 'ERROR', 
    delete: 'DELETE',
    write: 'WRITE', 
    reset: 'RESET', 
    check: 'CHECK',
}

function UseReducer({ name }) {
    const [ state, dispatch ] = React.useReducer(reducer, initialState)
    
    
    React.useEffect(() => {
        if(state.loading){
            setTimeout(() => {
                if(state.value === SECURITY_CODE) {
                    dispatch({
                        type: 'CONFIRM'
                    })
                } else {
                    dispatch({
                        type: 'ERROR'
                    })
                }
            }, 2000)
        }
    })
    if(!state.confirmed && !state.deleted){
        return (
            <div>
                <h2>Eliminar { name }</h2>
                <p>Por favor escribe el código de seguridad</p>
                {state.error && (
                    <p>Error: el código es incorrecto</p>
                ) }
                {state.loading && (
                    <p>Cargando...</p>
                ) }
                <input placeholder="Código de seguridad"
                value={state.value} 
                onChange={(event) => {
                    dispatch({
                        type: actionTypes.write, 
                        payload: event.target.value
                    })
                }}
                
                />
                <button
                onClick={() =>  dispatch({
                    type: actionTypes.check
                })}
                >Comprobar</button>
            </div>
        ); 
    } else if(state.confirmed && !state.deleted){
        return(
            <React.Fragment>
                <p>¿Estás seguro de que deseas eliminar?</p>
                <button
                onClick={() =>  dispatch({
                    type: actionTypes.delete
                })}
                >Confirmar</button>
                <button
                onClick={() => {
                    dispatch({
                        type: actionTypes.reset
                    })
                }}
                >Cancelar</button>
            </React.Fragment>
        )
    } else if( state.confirmed && state.deleted ){
        return(
        <React.Fragment>
            <p>Eliminado con éxito</p>
            <button
            onClick={() => {
                dispatch({
                    type: actionTypes.reset 
                })
            }}
            >Regresar al inicio</button>
        </React.Fragment>)
    }
    
}

export { UseReducer, actionTypes };

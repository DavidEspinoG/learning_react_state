import React from 'react'

const SECURITY_CODE = 'paradigma'

function UseState({ name }) {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [deleted, setDeleted] = React.useState(false);
    const [confirmed, setConfirmed] = React.useState(false);
    const onConfirm = () {
        setLoading(false)
        setError(false)
        setConfirmed(true)
    }
    React.useEffect(() => {
        if(loading){
            setTimeout(() => {
                if(value === SECURITY_CODE) {
                    onConfirm()
                } else {
                    setError(true)
                    setLoading(false)
                }
                
            }, 3000)
        }
       
    }, [loading])
    if(!confirmed && !deleted){
        return (
            <div>
                <h2>Eliminar { name }</h2>
                <p>Por favor escribe el código de seguridad</p>
                {error && (
                    <p>Error: el código es incorrecto</p>
                ) }
                {loading && (
                    <p>Cargando...</p>
                ) }
                <input placeholder="Código de seguridad"
                value={value} 
                onChange={(event) => {
                    setValue(event.target.value)
                    setError(false)
                }}
                
                />
                <button
                onClick={() => setLoading(prevState => !prevState)}
                >Comprobar</button>
            </div>
        ); 
    } else if(confirmed && !deleted){
        return(
            <React.Fragment>
                <p>¿Estás seguro de que deseas eliminar?</p>
                <button
                onClick={() => {setDeleted(true)}}
                >Confirmar</button>
                <button
                onClick={() => {
                    setConfirmed(false)
                    setValue('')
                }}
                >Cancelar</button>
            </React.Fragment>
        )
    } else if( confirmed && deleted ){
        return(
        <React.Fragment>
            <p>Eliminado con éxito</p>
            <button
            onClick={() => {
                setConfirmed(false)
                setDeleted(false)
            }}
            >Regresar al inicio</button>
        </React.Fragment>)
    }
    
}

export { UseState };
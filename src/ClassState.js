import React from 'react'

const SECURITY_CODE = 'paradigma'


class ClassState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: false,
            loading: false
        };
    }
    componentDidUpdate(){
        if(this.state.loading){
            setTimeout(() => {
                if(SECURITY_CODE === this.state.value){
                    this.setState({loading: false, error: false})
                } else {
                    this.setState({error: true, loading: false})
                }
                
            }, 3000)
        }
    }
    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor escribe el código de seguridad</p>
                {this.state.error && (
                <p>Error: el código es incorrecto</p>
                ) }
                {this.state.loading && (
                <p>Cargando...</p>
                 ) }
                <input 
                value={this.setState.value}
                onChange={(event) => {
                    this.setState({value: event.target.value})
                    this.setState({error: false})
                }}
                placeholder="Código de seguridad"/>
                <button 
                    onClick={() => this.setState({loading: true})}
                >Comprobar</button>
            </div>
        )
    }
}

export { ClassState };
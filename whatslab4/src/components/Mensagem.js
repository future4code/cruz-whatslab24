import React from 'react';


export class Mensagem extends React.Component {
    render() {
        return (
            <div>
                <input placeholder='nome'
                value={''}
                onchange={''}
                />
                <input placeholder='mensagem'
                value={''}
                onchange={''}
                />
                <button onclick={''}>Enviar</button>
            </div>
        )
    }
}
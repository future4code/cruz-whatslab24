import React from 'react';
import './App.css';

import styled from 'styled-components'

const SpaceMessage = styled.div`
height: 100vh;
border: 1px black solid;
width: 500px;
display: flex;
flex-direction: column;
justify-content: flex-end;
background-color: #f5c9d6;
`
const MsgDigitada = styled.section`
display: flex;
flex-direction: column;
padding: 20px;
margin-bottom: 10px;
`
const Inputs = styled.section`
display: flex;
`
const Corpo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const InputUsuario = styled.input`
width: 100px;
margin: 10px;
`
const InputTexto = styled.input`
width: 350px;
margin: 10px;
`
const InputBotao = styled.button`
margin: 10px;
`

class App extends React.Component{
  state = {
    chat: [],
    valorInputUsuario: "",
    valorInputTexto: ""
  }

  addconversa = () => {
    const novaConversa = {
      usuario: this.state.valorInputUsuario,
      texto: this.state.valorInputTexto
    }

    const novaconversas = [...this.state.chat, novaConversa]
    this.setState({chat: novaconversas})
    this.setState({valorInputUsuario : ""})
    this.setState({valorInputTexto : ""}) 
  }

  onChangeInputUsuario = (event) => {
    this.setState({valorInputUsuario: event.target.value})
  }

  onChangeInputTexto = (event) => {
    this.setState({valorInputTexto: event.target.value})
  }

  render(){

    const conversasdoChat = this.state.chat.map((conversa) => {
    return( <p>{conversa.usuario}: {conversa.texto}</p>)
    })

    return(
      <Corpo>
        <SpaceMessage>
        <MsgDigitada>
          <h1>WhatsLab</h1>
          <div className="chat">
            {conversasdoChat}
          </div>
        </MsgDigitada>
       
       <Inputs>
        
           <InputUsuario
            value={this.state.valorInputUsuario} 
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />
          <InputTexto
            value={this.state.valorInputTexto}
            onChange={this.onChangeInputTexto}
            placeholder={"Digite uma mensagem"}
          />
          
          <InputBotao onClick={this.addconversa}>Enviar</InputBotao>
           
        </Inputs>
        </SpaceMessage>
      </Corpo>
    )
  }
}

export default App;

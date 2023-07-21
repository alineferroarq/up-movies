import { useState } from "react"
import { InputForm } from "./components/inputForm"
import { Button } from "./components/Button"



function App() {
  const [fields, setFields] = useState({
    titulo:'',
    sinopse:'',
    votos:'',
  })
  
  const adicionar = event => {
    event.preventDefault()
    console.log('add', fields)

  }

  const atualizaInput = event =>{
    console.log(event.target.id)
    setFields({ ...fields, [event.target.id]: event.target.value })
  }
  const enviar = event => {
    event.preventDefault()
    console.log('enviar')
  }
  const limpar = event => {
    event.preventDefault()
    console.log('limpar')
  }

  return (
    <>
      <div className="container">
        <h2 className="mt-3 mb-3">Cadastro de Filmes</h2>
        <form>
          <InputForm nome='Título' width={10}/>
          <InputForm nome='Gênero'  width={2}/>
          <InputForm nome='Diretor' width={6}/>
          <InputForm nome='Sinópse' width={2}/>
          <InputForm nome='Votos' width={1}/>
          <div className="row g-2">
          <Button 
          tipo={'submit'}
          nome='Enviar' 
          width={2}
          onClick={enviar}
          />
          <Button 
          tipo={'reset'}
          nome='Limpar' 
          width={2}
          onClick={limpar}
          />
          </div>
          
          
        </form>
      </div>

    </>
  )
  }

  export default App

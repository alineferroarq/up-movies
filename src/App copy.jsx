import { useState } from "react"



function App() {
  const [titulo, setTitulo] = useState('')
  const [sinopse, setSinopse] = useState('o filme é de terror')
  const adicionar = event => {
    e.preventDefault()
    console.log('add', titulo, sinopse)

  }

  const atualizaInput = event => {
    console.log('atulizaInput', event.target.value);
    setTitulo(event.target.titulo)

  }
  const atualizaSinopse = event => {
    console.log('atualizaSinopse', event.target.value);
    setSinopse(event.target.titulo)
  }

  return (
    <>
      <div className="container">
        <h2 className="mt-3 mb-3">Cadastro de Filmes</h2>
        <form>
          <div className="col-md-12">
            <label htmlFor="titulo" className="form-label">Título</label>
            <input 
            id="titulo" 
            type="text" 
            className="form-control" 
            value={titulo} 
            onChange={atualizaInput} />
          </div>
          <div className="col-md-12">
            <label htmlFor="sinopse" className="form-label">Sinopse</label>
            <input 
            id="sinopse" 
            type="text" 
            className="form-control" 
            value={sinopse} 
            onChange={atualizaSinopse} />
          </div>
          <div className="col-md-12">
            <label htmlFor="" className="form-label">Votos</label>
            <input type="text" className="form-control" />
          </div>
          <button className="btn btn-primary mt-3" onClick={adicionar}>Adicionar</button>
        </form>
      </div>

    </>
  )
}

  export default App

import React from 'react'

export const Button = (props) => {
  return (
    
    <button 
    type={props.tipo}
    style={{marginRight:'1rem'}}
    className={ `btn btn-primary mt-${props.width}` }
    onClick={props.click}
    //onClick={adicionar}// 
    >{props.nome}
    </button>
    
  )
}

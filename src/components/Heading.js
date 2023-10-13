import React from 'react'
import "../components/Food_bank.css"

function Heading(props) {
  return (
    <div className='heading'>
        <h1>{props.Heading}</h1>
    </div>
  )
}

export default Heading
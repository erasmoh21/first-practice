import React,{useState} from 'react'
import ValorDeColores from './ValorDeColores.js'

export default function FormularioColores() {
    const [color,setColor] = useState('0')

    function cambioDeColor(e) {
        const input = document.querySelector('.contenedorPrincipal')
        setColor(e.target.value)
        input.style.backgroundColor = color
    }

    return (
        <div className="contenedorInput">
            <label htmlFor='inputColor' id='labelInput'>Seleccione el color de su gusto: </label>
            <input type={"color"} id="inputColor" onChange={cambioDeColor} ></input>
            <ValorDeColores color={color}/>
        </div>
    )
}
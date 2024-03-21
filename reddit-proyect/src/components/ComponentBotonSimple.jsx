import React from 'react'
import "../style/styleBotonSimple.css";

export const ComponentBotonSimple = ({nombre, imagen}) => {
  return (
    <div className='cp__BotonSimple'>
        <a>
            <i class={imagen}></i>
            <label className="Principal">
                {nombre}
            </label>
        </a>
    </div>
  )
}

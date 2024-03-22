import React from 'react'
import { ComponentTEMAS } from './ComponentTEMAS'
import { ComponentRECURSOS } from './ComponentRECURSOS'
import "../style/stylePanelIzquierdo.css"
import { ComponentBotonSimple } from './ComponentBotonSimple'


export const ComponentPanelIzquierdo = () => {
  return (
    <div className='container__panel scrollableDiv'>
      
      <ComponentBotonSimple  nombre="Principal" imagen="fa-solid fa-house" className="elemento-superior"/>
      <ComponentBotonSimple nombre="Popular" imagen="fa-solid fa-arrow-trend-up" className="elemento-superior" />


        <hr className='cp__separador'></hr>
          <ComponentTEMAS className="elemento-superior"/>
        <hr className='cp__separador'></hr>
          <ComponentRECURSOS className="elemento-superior"/>
      <div className='cp__derechosAutor'>
        <a href="https://www.redditinc.com/">
          <p>Reddit, Inc. © 2024. Todos los derechos reservados.</p>
        </a>
    </div>
    </div>
  )
}
import React from 'react'
import { ComponentTEMAS } from './ComponentTEMAS'
import { ComponentRECURSOS } from './ComponentRECURSOS'
import "../style/stylePanelIzquierdo.css"


export const ComponentPanelIzquierdo = () => {
  return (
    <div className='container__panel'>
      <div className='cp__Boton'>
        <a>

          <i class="fa-solid fa-house"></i>
          <label className="Principal">
            Principal
          </label>
        </a>
      </div>

      <div className='cp__Boton'>
        <a>
          <i class="fa-solid fa-arrow-trend-up"></i>
          <label className="Principal">
            Popular
          </label>
        </a>
      </div>

        <hr className='cp__separador'></hr>
          <ComponentTEMAS/>
        <hr className='cp__separador'></hr>
          <ComponentRECURSOS/>
      <div className='cp__derechosAutor'>
        <a href="https://www.redditinc.com/">
          <p>Reddit, Inc. © 2024. Todos los derechos reservados.</p>
        </a>
    </div>
    </div>
  )
}
import React from 'react'
import { ComponentTEMAS } from './ComponentTEMAS'
import { ComponentRECURSOS } from './ComponentRECURSOS'
import "../style/stylePanelIzquierdo.css"


export const ComponentPanelIzquierdo = () => {
  return (
    <div className='container__panel'>

      <div className='boton__Principal'>
        <a>

          <i class="fa-solid fa-house"></i>
          <label className="Principal">
            Principal
          </label>
        </a>
      </div>

      <div className='boton__Principal'>
        <a>

          <i class="fa-solid fa-arrow-trend-up"></i>
          <label className="Principal">
            Popular
          </label>
        </a>
      </div>

      <hr className='separador'></hr>

      <ComponentTEMAS/>

      <hr className='separador'></hr>

      <ComponentRECURSOS/>

    <div className='derechosAutor'>
      <a href="https://www.redditinc.com/">
        <p>Reddit, Inc. © 2024. Todos los derechos reservados.</p>
      </a>
    </div>

    </div>
  )
}
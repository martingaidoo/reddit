import React, {useState} from 'react'
import { ComponentBotonSimple } from './ComponentBotonSimple'


export const ComponentRECURSOS = () => {
  const [state, setState] = useState(false);

  const toggleState = () => {
    setState(!state);
  };

  return (
  
  <>
  <div className='container__button'> 
  {
  //El css se encuentra en styleTemas.css   
} 
  
      <button onClick={toggleState}>Recursos</button>
  </div>
  {state && (
        <div>

  <ComponentBotonSimple nombre="hola" imagen="fa-brands fa-reddit"/>
  <ComponentBotonSimple nombre="hola" imagen="fa-brands fa-reddit"/>
  <ComponentBotonSimple nombre="hola" imagen="fa-brands fa-reddit"/>
  <ComponentBotonSimple nombre="hola" imagen="fa-brands fa-reddit"/>
  <ComponentBotonSimple nombre="hola" imagen="fa-brands fa-reddit"/>
  <ComponentBotonSimple nombre="hola" imagen="fa-brands fa-reddit"/>
  <hr/>
  <ComponentBotonSimple nombre="hola" imagen="fa-brands fa-reddit"/>
  <ComponentBotonSimple nombre="hola" imagen="fa-brands fa-reddit"/>
  <ComponentBotonSimple nombre="hola" imagen="fa-brands fa-reddit"/>
  <hr/>
  <ComponentBotonSimple nombre="hola" imagen="fa-brands fa-reddit"/>
  <ComponentBotonSimple nombre="hola" imagen="fa-brands fa-reddit"/>
  <ComponentBotonSimple nombre="hola" imagen="fa-brands fa-reddit"/>
    </div>)}
  </>
  )
}

import React, { useState } from 'react';
import "../style/styleTEMAS.css";
import { ComponentBotonDesplegable } from './ComponentBotonDesplegable';
import { ComponentBotonSimple } from './ComponentBotonSimple';


export const ComponentTEMAS = () => {
  const [state, setState] = useState(false);
  const [mas, setMas] = useState(false);

  const toggleState = () => {
    setState(!state);
  };

  const desplegarMas = () => {
    setMas(!mas);
  }

  return (
    <div className='container'>
      <div className='container__button'>
      <button onClick={toggleState}>Temas</button>
      </div>
      {state && (
        <div>

          <ComponentBotonDesplegable array={["Valheim", "Genshin Impact", "Minecraft"]} imagen="fa-solid fa-gamepad" nombre="Videojuegos"/>
          <ComponentBotonDesplegable array={["Valheim", "Genshin Impact", "Minecraft"]} imagen="fa-solid fa-gamepad" nombre="Deportes"/>
          <ComponentBotonDesplegable array={["Valheim", "Genshin Impact", "Minecraft"]} imagen="fa-solid fa-gamepad" nombre="Negocios"/>
          <ComponentBotonDesplegable array={["Valheim", "Genshin Impact", "Minecraft"]} imagen="fa-solid fa-gamepad" nombre="Cripto"/>
          <ComponentBotonDesplegable array={["Valheim", "Genshin Impact", "Minecraft"]} imagen="fa-solid fa-gamepad" nombre="Television"/>
          <ComponentBotonDesplegable array={["Valheim", "Genshin Impact", "Minecraft"]} imagen="fa-solid fa-gamepad" nombre="Famosos"/>
          
          <div className="botonChico">
          {!mas && (<button  onClick={desplegarMas}>Ver mas</button>)}

          {mas && (
            <React.Fragment>

            <ComponentBotonSimple nombre="Animales y mascotas" imagen="fa-solid fa-house"/>

            <ComponentBotonSimple nombre="Anime" imagen="fa-solid fa-house"/>

            <button onClick={desplegarMas}>Ver menos</button>

            </React.Fragment>
          )}
          
          </div>

          

        </div>
      )}
    </div>
  );
};

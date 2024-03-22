import React, {useState} from 'react'
import "../style/styleBotonDesplegable.css";
export const ComponentBotonDesplegable = ({array, imagen, nombre}) => {
    const [desplegar, setDesplegar] = useState(false);

    const despliegue = () => {
        setDesplegar(!desplegar);
        console.log(desplegar());
    }
    console.log(imagen)
    return (

    <div className='contenedorBoton '>
        <div className='botonPrincipal'>
        <button onClick={despliegue} className="desplegable">

        <i className={imagen}></i>
        <label>{nombre}</label>

        {desplegar && (<i class="fa-solid fa-arrow-up acomodarImagenFlecha"></i>)}
        {!desplegar && (<i class="fa-solid fa-arrow-down acomodarImagenFlecha"></i>)}
        </button>
        </div>
        {desplegar && (
            <React.Fragment>
                {array.map((item, index) => (
                        <div key={index}>
                            <a href={`https://www.reddit.com`} className='elementoBoton'>
                                <button>{item}</button>
                            </a>
                        </div>
                    ))}

            </React.Fragment>
            )}
    </div>

)
}
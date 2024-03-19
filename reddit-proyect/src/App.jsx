import "./style/styleApp.css"
import { ComponentComunidades } from "./components/ComponentComunidades "
import { ComponentDestacados } from "./components/ComponentDestacados"
import { ComponentFiltro } from "./components/ComponentFiltro"
import { ComponentHeader } from "./components/ComponentHeader"
import { ComponentPanelIzquierdo } from "./components/ComponentPanelIzquierdo"
import { ComponentPrincipales } from "./components/ComponentPrincipales"
export const App = () => {
  
  return (
    <>
    <ComponentPanelIzquierdo />
    <div className="container__Principal">
    <ComponentPrincipales community={'Rubiu5'} time={1710681711673} tittle={'Quiero aprender SQL pero no se que sgbd usar'} description={'Hay varias opciones pero me gustaría alguna que sea solicitada en el mercado y sobretodo que sea gratis para aprender'} />
    </div>
    </>
  )
}
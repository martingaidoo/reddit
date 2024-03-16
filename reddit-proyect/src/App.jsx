import { ComponentComunidades } from "./components/ComponentComunidades "
import { ComponentDestacados } from "./components/ComponentDestacados"
import { ComponentFiltro } from "./components/ComponentFiltro"
import { ComponentHeader } from "./components/ComponentHeader"
import { ComponentPanelIzquierdo } from "./components/ComponentPanelIzquierdo"
import { ComponentPrincipales } from "./components/ComponentPrincipales"

export const App = () => {
  
  return (
    <div>
      <ComponentHeader />
      <ComponentPanelIzquierdo />
      <ComponentFiltro />
      <ComponentDestacados />
      <ComponentPrincipales />
      <ComponentComunidades />
    </div> 
    )
}
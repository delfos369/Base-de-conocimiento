
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css"
import Public from "./Roles/Public";
import MenuPublico from "./Paginas/MenuPublico";
import Rol1 from "./Roles/Rol1";
import Rol2 from "./Roles/Rol2";
import MenuPrivado1 from "./Paginas/MenuPrivado1";
import MenuPrivado2 from "./Paginas/MenuPrivado2";

function App() {
  return (
    <div className="App">
        <Router>

{/*========================== Páginas Públicas==========================*/}

          <Public path="/" component={MenuPublico} />

{/*========================== Rol 1==========================*/}

          <Rol1 path="/" component={MenuPrivado1 } />

{/*========================== Rol 2==========================*/}

          <Rol2 path="/" component={MenuPrivado2} />


        </Router>
  
    
    </div>
  );
}

export default App;

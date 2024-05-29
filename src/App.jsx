import { useState } from "react";
import { Buscador } from "./COMPONENTS/Buscador"
import { Crear } from "./COMPONENTS/Crear"
import { Listado } from "./COMPONENTS/Listado"

function App() {

  const [listadoState, setListadoState] = useState([]);

  return (
    <>
    <div className="layout">
       {/* <!--Cabecera--> */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            
            <h1>MisPelis</h1>
        </header>

        {/* <!--Barra de navegación--> */}
        <nav className="nav">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Peliculas</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>



        {/* <!--Contenido principal--> */}
        <section id="content" className="content">
          {/*LA LISTA DE PELICULAS */}
          <Listado listadoState={listadoState} setListadoState={setListadoState}></Listado>

        </section>


        {/* <!--Barra lateral--> */}
        <aside className="lateral">
            {/*BUSCADOR DE PELIS */}
            <Buscador listadoState={listadoState} setListadoState={setListadoState}></Buscador>



          {/*AGREGAR PELICULAS */}
          <Crear setListadoState = {setListadoState}></Crear>
        </aside>


    </div>
    {/* <!--Pie de página--> */}
    <footer className="footer">
        &copy;<a target='_blank' href="https://github.com/JhojanBinary?tab=overview&from=2024-05-01&to=2024-05-27">JhojanBinary</a>
    </footer>

    </>
  )
}

export default App

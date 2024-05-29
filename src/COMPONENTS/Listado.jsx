import { useEffect, useState } from "react";
import { Editar } from "./Editar";

export const Listado = ({ listadoState, setListadoState }) => {
  // const [listadoState, setListadoState] = useState([]);

  const [editar, setEditar] = useState(0);

  useEffect(() => {
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(peliculas);

    return peliculas;
  };

  const borrarPeli = (id) => {
    //conseguir las pelis almacenadas
    let pelis_almacenadas = conseguirPeliculas();

    //filtrar las peliculas para que elimine el array
    let nuevo_array_pelis = pelis_almacenadas.filter(
      (peli) => peli.id !== parseInt(id)
    );

    //actualizat el estado del listadoState
    setListadoState(nuevo_array_pelis); //borramos la parte vusual

    //actualizar los datos en el local storage
    localStorage.setItem("pelis", JSON.stringify(nuevo_array_pelis)); //borramos el id de local storage
  };

  return (
    <>
      {listadoState != null ? (
        listadoState.map((peli) => {
          return (
            <>
              <article key={peli.id} className="peli-item">
                <h3 className="title">{peli.titulo}</h3>
                <p className="description">{peli.descripcion}</p>

                <button
                  className="edit"
                  onClick={() => {
                    setEditar(peli.id);
                  }}
                >
                  Editar
                </button>

                <button
                  onClick={() => {
                    borrarPeli(peli.id);
                  }}
                  className="delete"
                >
                  Borrar
                </button>
              </article>

               {/*formulario al darle click en editar */}
               {editar === peli.id && (
                  <Editar peli ={peli}
                  conseguirPeliculas = {conseguirPeliculas}>
                  setEditar = {setEditar}
                  setListadoState = {setListadoState}
                  </Editar>
                )}
            </>
          );
        })
      ) : (
        <h1>NO HAY PELICULAS AÑADIDAS</h1>
      )}
    </>
  );
};

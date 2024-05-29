import { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Crear = ({setListadoState}) => {
  const tituloComponente = "Añadir Pelicula";

  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: "",
  });

  //Destructurado:
  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = (e) => {
    e.preventDefault(); //PREVIENE QUE LA PÁGINA SE RECARGUE CUANDO ENVIAMOS EL FORMULARIO :v

    //CONSEGUIR DATOS DEL FORMULARIO
    let target = e.target; // coje todo el evento

    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    alert(titulo + " :  " + descripcion); //ALERT

    //CREAR OBJETO PARA GUARDAR LOS DATOS
    let peli = {
      id: new Date().getTime(),
      titulo, //titulo :  titulo
      descripcion, //descripcion : descripcion
    };

    //guardamos el estado
    setPeliState(peli);

    //actualizar el estado de listado principal
    setListadoState(elementos =>{
      return[...elementos, peli]
    })

           //clave(en que array del local lo quiero guardar)  y que objeto quiero guardar - "pelis"/peli
    GuardarEnStorage("pelis",peli); // llamado del la funcion

  };



  
  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>

      {/*paa evitar el uso de "peliState.titul o peliState.descripcion" */}
      <strong>
        {titulo && descripcion && "Creaste la Pelicula : " + titulo}
      </strong>

      <form onSubmit={conseguirDatosForm}>
        <input type="text" id="titulo" name="titulo" placeholder="Titulo" />

        <textarea
          className="textarea"
          id="descripcion"
          name="descripcion"
          placeholder="Descripción"
        ></textarea>

        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};

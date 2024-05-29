
export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = "Editar Pelicula"
    const guardarEdicion = (e,id) =>{
        e.preventDefault
        

        //conseguir el target del evento

        let target = e.target

        //buscar el indice del objeto de la pelicula a actualizar
        const pelis_almacenadas = conseguirPeliculas();
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

        //guardar objeto con ese indice - Actualizamos con los nuevos valores
        let peli_actualizada = {
            id,
            titulo : target.titulo.value,
            descripcion: target.descripcion.value
        }

        
        //actualizar el elemento
        pelis_almacenadas[indice] = peli_actualizada

        //guardar el nuevo array de objetos en el local storage
        localStorage.setItem('pelis', JSON.stringify(pelis_almacenadas))

        //actualizar el local storage
        setListadoState(pelis_almacenadas)
        setEditar (0);
    }


  return (
    <div className="edit_form">
        <h3 className="title">{titulo_componente}</h3>

        <form onSubmit={e => guardarEdicion(e,peli.id)}>
            <input type="text" name="titulo" className="titulo_editado" defaultValue={peli.titulo} />

            <textarea name="descripcion" defaultValue={peli.descripcion} className="descripción editada"></textarea>

            <input type="submit" className="editar" value="actualizar" />
        </form>

    </div>
  )
}

export const GuardarEnStorage = (clave, elemento) => { //convertimos la funcion en una reutilizable
 
    //comprobar los objetos del local storage
    //conseguir los elementos que ya tenemos en el localstorage

    let elementos = JSON.parse(localStorage.getItem(clave));

    console.log(elementos)

    //comprobar si es un array
    if(Array.isArray(elementos)){
      //si elementos es un array = voy a añadir un elemento nuevo    
      elementos.push(elemento)

    }
    else{
      //si no es un elemento, tengo que crear uno desde cero.
      elementos = [elemento];
    }


    //guardar en el local storage
    localStorage.setItem(clave,JSON.stringify(elementos))
    
    //devolcer el objeto guaradado
    return elemento;

}

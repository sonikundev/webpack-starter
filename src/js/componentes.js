import '../css/components.css'
import bmwimg from '../assets/img/bmw.png';//si no quieres que la imagen aparezca en html como img

export const saludar = ( nombre ) =>{//se le pone export para poder exportarla

    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }`;

    document.body.append( h1 );

    //Img //si no quieres que la imagen aparezca en html como img
    const img = document.createElement('img');
    img.src = bmwimg;
    document.body.append( img );
}
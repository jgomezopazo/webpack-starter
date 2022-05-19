
import css from '../css/componentes.css';
import logoWebpack from '../assets/img/webpack-logo.png';

export const saludar = ( nombre ) => {
    
    console.log(`hola ${nombre}`);

    const h1 = document.createElement('h1');
    h1.innerText = `hola ${nombre}`;

    document.body.append(h1);

    const img = document.createElement('img');
    img.src = logoWebpack;

    document.body.append(img);


}
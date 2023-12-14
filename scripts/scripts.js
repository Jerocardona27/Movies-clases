import { url } from "../helpers/contants.js";
import { GetData } from "../helpers/peticiones.js";


const template = document.getElementById("template").content;
const container = document.getElementById("ContainerCards");

document.addEventListener("DOMContentLoaded", /*le indico que es una promesa*/
    async () => {
        const response = await GetData(url);

        console.log("La url", response)
        /*necesito que falle o funcione la promesa*/


        let fragment = document.createDocumentFragment()

        //--------pintar las card---------//
        response.forEach(item => {
            console.log(item)
            const { id, Carrusel, Description, Poster, Title, Trailer, Type, Value, Year } = item


            template.querySelector('img').setAttribute('src', Poster);
            template.querySelector('img').setAttribute('alt', Type);
            const clone = template.cloneNode(true)
            fragment.appendChild(clone)



        });

        container.appendChild(fragment)
    });
import { url } from "../helpers/contants.js";
import { GetData } from "../helpers/peticiones.js";
import { NoView, ViewMovie } from "./ViewMovie.js";


let btnTodas = document.getElementById('btnTodas');
let btnMas = document.getElementById('btnMas');
let btnMenos = document.getElementById('btnMenos');

let form = document.querySelector('form');
let search = document.getElementById('search');

//-----------Carga Principal--------//

document.addEventListener("DOMContentLoaded", async () => {
    btnTodas.addEventListener('click', async () => {
        const response = await GetData(url);
        ViewMovie(response)
    });
    btnMas.addEventListener('click', async () => {
        const response = await GetData(url);
        const respMas = await response.filter((fi) => fi.Value >= 8);
        ViewMovie(respMas)
    });
    btnMenos.addEventListener('click', async () => {
        const response = await GetData(url);
        const respMenos = await response.filter((fi) => fi.Value < 8)
        ViewMovie(respMenos)
    });



});




//-----------Busqueda del NavBar--------//

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    console.log("A buscar:", search.value)
    const response = await GetData(url);
    const respSearch = await response.filter((fi) =>
        fi.Title.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
    );

    console.log(respSearch)
    if (respSearch.length > 0) {
        ViewMovie(respSearch)
    } else {
        NoView(search.value)
    }




})
const template = document.getElementById("template").content;
const template2 = document.getElementById("template2").content;
const container = document.getElementById("ContainerCards");

export const ViewMovie = async (response) => {
    container.innerHTML = ""
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


};


export const NoView = async (value) => {
    container.innerHTML = ""
    let fragment = document.createDocumentFragment()

    //--------pintar las card---------//
    template2.forEach(value => {
        console.log(value)
       

        template2.querySelector('img').setAttribute('src', Poster);
        
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)



    });

    container.appendChild(fragment)


};
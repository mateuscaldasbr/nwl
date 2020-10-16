const options = {
    draggings: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollwheelZoom: false,
    zoomControl: false

}

//Create map

const map = L.map("mapid", options).setView([-3.1442911, -58.4300785], 14);

// Create and add tileLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", /*{
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}*/).addTo(map);

//Create icon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//Create and add Marker
L.marker([-3.1442911, -58.4300785], { icon })
    .addTo(map)

    /*Image Galery */

    function selectImage(event){
        const button = event.currentTarget;
        // remover todas as classes .active

        const buttons = document.querySelectorAll(".images button");
        buttons.forEach(removeActiveClass);
        
        function removeActiveClass(button) {
            button.classList.remove("active");

        }

        //selecionar a image clicada

        const image = button.children[0];   
        const imageContainer = document.querySelector(".orphanage-details > img");


        // atualizar o container de image

        imageContainer.src = image.src;
        //adicionar a classe .active para este botão
        button.classList.add('active');
    }
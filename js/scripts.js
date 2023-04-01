

let galleryMain = document.querySelector(".gallery");
let url = 'https://jsonplaceholder.typicode.com/photos';

function createElementGalleryItem(element) {
        return document.createElement()
}

function getImg () { 
fetch (url)
.then (response => {
        return response.json()})
.then ( response => {
        let content = response
        console.log(content)
        content = content.splice(0, 10);
        let key
        
        for (key in content) {
                 galleryMain.innerHTML += `
                <li class="gallery__item">
                <h3 class="gallery__item_name">${content[key].title}</h3>
                <img class="gallery__item_img" src=${content[key].url} alt="">
                </li>
                ` 
        }
})}

getImg();

function scrollInDown () {
        let siteHeight = window.outerHeight;
        scrollPosition = window.scrollY;
        if ( siteHeight < scrollPosition ) {
                fetch (url)
                .then (response => {
                        return response.json()})
                .then ( response => {
                        let content = response
                        console.log(content)
                        content = content.splice(0, 10);
                        let key
                        
                        for (key in content) {
                                 galleryMain.innerHTML += `
                                <li class="gallery__item">
                                <h3 class="gallery__item_name">${content[key].title}</h3>
                                <img class="gallery__item_img" src=${content[key].url} alt="">
                                </li>
                                ` 
                        }
                })} 
}

window.addEventListener("scroll", function () {
        scrollInDown();
})
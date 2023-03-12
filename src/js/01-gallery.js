import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector(".gallery")

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('')
}

const galleryMarkup = createGalleryItemsMarkup(galleryItems)
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

galleryContainer.addEventListener('click', handleImgClick)

function handleImgClick(event) {
    event.preventDefault();


    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
    const largeImageUrl = event.target.dataset.source
    const instance = basicLightbox.create(
        `<img src="${largeImageUrl}" width="800" height="600">`
    )
    instance.show(() => {
    window.addEventListener('keydown', onEscKeyPress)
    })

    function onEscKeyPress(event) {
        const ESC_KEY_CODE = 'Escape';
        const isEscKey = event.code === ESC_KEY_CODE;

        if (isEscKey) {
            instance.close(() => {
            window.removeEventListener('keydown', onEscKeyPress)
            })
        }
    }

}

console.log(galleryItems);


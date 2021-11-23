import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
let instance;

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(pictures) {
  return pictures
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
    alt="${description}"
      />
    </a>
  </div>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", onPictureClick);

function onPictureClick(evt) {
  evt.preventDefault();

  openModal(event);
  closeModal();
}

function openModal(event) {
  instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}">
  `);

  instance.show();
}

function closeModal() {
  document.addEventListener("keydown", (e) => {
    if (e.code !== "Escape") {
      return;
    }
    instance.close();
  });
}

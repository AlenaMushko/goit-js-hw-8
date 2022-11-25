import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener("click", onClickCreateModalWindow);

const itemEl = galleryItems
  .map(
    (image) => `
<a class="gallery__item" href =${image.original} ><img class="gallery__image" 
  src = ${image.preview} alt = ${image.description}/></a>`
  )
  .join("");
galleryEl.insertAdjacentHTML("beforeend", itemEl);

function onClickCreateModalWindow(e) {
  // забороняємо стандартні дії
  e.preventDefault();
  // вказую, що відкривати лише img
  const isIMGEl = e.target.nodeName;
  if (isIMGEl !== "IMG") {
    return;
  }
}
  // підключаємо бібліотеку SimpleLightbox
 const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
    captionsData: "alt",
    captionsDelay: 250,
  })

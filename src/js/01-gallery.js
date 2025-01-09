import "./init";
import { images } from "../data/images";
// Kullanılacak kısmın import edilmesi
import SimpleLightbox from "simplelightbox";
// Ek stillerin eklenmesi
import "simplelightbox/dist/simple-lightbox.min.css";

// linklerin tarayıcıda gözükebilmesi için  başındaki < > işaretlerini kaldırdım.
const updateImages = images.map((image) => ({
  ...image, // ...image orjinal nesne özelliklerini korudum.
  preview: image.preview.replace(/^<|>$/g, ""),
  original: image.original.replace(/^<|>$/g, ""),
}));

const gallery = document.querySelector(".gallery");
// updateImages dizisini kullanark map ile üzerinide gezinip prewiev ve original ve description çekerek yeni dizi oluşturdum.
const galleryMakeup = updateImages
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery-item"> 
       <a class="gallery-link" href="${original}">
      <img class="gallery-image" src="${preview}" alt="${description}"/> </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryMakeup); // gallery clasının içine ekledim.

new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });

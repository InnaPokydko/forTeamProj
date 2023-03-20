// import { renderImg } from './js/renderImg';
// import { fatchImg } from './js/fetchImg';
import Notiflix from 'notiflix';
// import './css/styles.css';



const favBtn = document.querySelector('.favorite-button');
// const readMoreLink = document.querySelector('.news-card-read-more a');
refs.favBtn.addEventListener('click', addToFavorite);

// Функція для додавання новини до списку збережених новин
function addToFavorites() {
  // Отримуємо список збережених новин з локального сховища браузера
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  // Перевіряємо, чи новина вже додана до списку збережених новин
  const index = favorites.findIndex(item => item.id === news.id);

  if (index === -1) {
    // Якщо новина не додана до списку, то додаємо її
    favorites.push({
      id: news.id,
      date: new Date()
    });
    // Змінюємо текст кнопки на "RemoveFromFavorite"
    favoriteButton.textContent = 'RemoveFromFavorite';
  } else {
    // Якщо новина вже додана до списку, то видаляємо її
    favorites.splice(index, 1);
    // Змінюємо текст кнопки на "AddToFavorite"
    favoriteButton.textContent = 'AddToFavorite';
  }

  // Зберігаємо список збережених новин в локальному сховищі браузера
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Функція для додавання новини до списку переглянутих новин
function addToRead() {
  // Отримуємо список переглянутих новин з локального сховища браузера
  let read = JSON.parse(localStorage.getItem('read')) || {};

  // Перевіряємо, чи новина вже додана до списку переглянутих новин
  const date = read[news.id];
  if (!date) {
    // Якщо новина не додана до списку, то додаємо її з поточною датою
    read[news.id] = new Date();
  } else {
    // Якщо новина вже додана до списку, то видаляємо її з поточною датою та додаємо знову з новою датою
    delete read[news.id];
    read[news.id] = new Date();
  }

  // Зберігаємо список переглянутих новин в локальному сховищі браузера
  localStorage.setItem
}
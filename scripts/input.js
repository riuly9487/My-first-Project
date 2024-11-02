import { todolist, saveToStorage, addToList } from "./storage.js";
import { renderGenerateList } from "./content.js";

const button = document.querySelector('.js-add-button');

button.addEventListener('click', () => {
  addToList()
})

addEventListener('keydown', (value) => {
  if (value.key === 'Enter') {
    addToList();
  }
})
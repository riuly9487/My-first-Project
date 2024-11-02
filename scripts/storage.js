import { renderGenerateList } from "./content.js";

export let todolist; 

loadFromStorage();

function loadFromStorage() {
  todolist = JSON.parse(localStorage.getItem('todolist'))

  if (!todolist) {
    todolist = [{
      id: 1,
      content: 'Welcome to my website',
      isChecked: false,
      date: '2024-11-20'
    }, {
      id: 2,
      content: 'This is my mini project, bug may appear',
      isChecked: false,
      date: '2024-11-20'
    }, {
      id: 3,
      content: 'Less than 1 month of learning',
      isChecked: true,
      date: '2024-11-20'
    }];
  }
}

export function saveToStorage() {
  localStorage.setItem('todolist', JSON.stringify(todolist));
}

export function addToList() {
  const input = document.querySelector('.js-input').value;
  const date = document.querySelector('.js-date').value;
  const inputid = todolist.length + 1;
  
  if (!input || !date) {
    return
  }

  const message = {
    id: inputid,
    content: input,
    isChecked: false,
    date
  };

  todolist.push(message);
  document.querySelector('.js-input').value = '';
  saveToStorage();
  renderGenerateList();
}

export function updateToList(value) {
  const newList = [];
  
  let i = 1;
  todolist.forEach((todolist, index) => {
    if (index + 1 !== Number(value)) {
      newList.push({
        id: i,
        content: todolist.content,
        isChecked: todolist.isChecked,
        date: todolist.date
      });
      i++
    }
  })

  todolist.length = 0;
  newList.forEach((item) => 
    todolist.push(item));

  saveToStorage();
  renderGenerateList();
}
import { todolist, saveToStorage, updateToList } from "./storage.js";

export function renderGenerateList() {
  let html = '';
  let uncheckedList = todolist.length;

  todolist.forEach((todolist) => {

    let checkmark = '';

    if (todolist.isChecked) {
      checkmark = 'checked';
      uncheckedList--;
    }

    const getHTML = `
      <div class="todolist-content">
        <div class="left-section" >
          <button class="checkmark js-checkmark-${todolist.id} ${checkmark}" data-checkmark-id="${todolist.id}">
          <div>
          </div>
          </button>
        </div>

        <div class="middle-section js-middle-section-${todolist.id} ${checkmark}">
          <div class="list-text-content">
            ${todolist.content}
          </div>
          <div class="list-date-content">
            ${todolist.date}
          </div>
        </div>

        <div class="right-section">
          <button class="delete-button js-delete-button" data-id="${todolist.id}">
            x
          </button>
        </div>
      </div>
    `;

    if (uncheckedList !== 0) {
      document.querySelector('title').innerHTML = `TodoList Website - (${uncheckedList})`;
    } else {
      document.querySelector('title').innerHTML = `TodoList Website`;
    }

    html += getHTML;
  });

  document.querySelector('.content').innerHTML = html;

  document.querySelectorAll('.js-delete-button')
    .forEach((button) => {
      button.addEventListener('click', () => {
        const deleteId = button.dataset.id;
        updateToList(deleteId);
      })
    })
  
  document.querySelectorAll('.checkmark')
    .forEach((button) => {
      button.addEventListener('click', () => {
        const checkmarkId = button.dataset.checkmarkId;
        const checkmark = document.querySelector(`.js-checkmark-${checkmarkId}`);
        const content = document.querySelector(`.js-middle-section-${checkmarkId}`);
        const lookUpList = todolist[checkmarkId - 1];
        
        if (!checkmark.classList.contains("checked")) {
          checkmark.classList.add("checked");
          content.classList.add("checked");
          lookUpList.isChecked = true;
          renderGenerateList();

        } else {
          checkmark.classList.remove("checked");
          content.classList.remove("checked");
          lookUpList.isChecked = false;
          renderGenerateList();
        }

        saveToStorage();
      })
    })  
}

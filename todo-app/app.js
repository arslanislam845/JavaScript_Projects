const addForm = document.querySelector(".add");
const list = document.querySelector(".todos"); 


//Adding todos
const generateTemplate = (todo) => {
  const html = `
   <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
    </li>
    `;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  //check - for true if the todo lenght is greater than 1 it return true to if condition
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset(); //to reset the input
  }
});





// Deleting todos - we are using event delegation
//we already had reference for ul
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});


//Filter and Searching - keyup event
//cont search = document.querySelector('.search input');
const search = document.querySelector(".input-field"); //reference to search input

const filterTodos = (term) => {
    Array.from(list.children)
      .filter((todo) => !todo.textContent.toLowerCase().includes(term))
      .forEach((todo) => todo.classList.add("filtered"));
    
    
    
    Array.from(list.children)
      .filter((todo) => todo.textContent.toLowerCase().includes(term))
      .forEach((todo) => todo.classList.remove("filtered"));
    
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
    filterTodos(term);
});


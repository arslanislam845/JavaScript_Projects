const addbtn=document.querySelector(".addbtn")
const text=document.querySelector("#addtext")
const list = document.querySelector(".list");


const generateTemplate = (text) => {
    const html = `<div class="mx-2 my-2 card" style="width: 15rem;">
    <div class="card-body">
       <h5 class="card-title">Note</h5>
       <p class="card-text">${text.value}</p>
       <a href="#" class="delete btn btn-primary">Delete</a>
     </div>`;
    list.innerHTML += html;
};
  
addbtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (text.value.length>1) {
      generateTemplate(text);
      text.value="";
    }
  });
list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.parentElement.remove();
    }
  });


const search = document.querySelector(".input-field"); 

const filtertexts = (term) => {
    Array.from(list.children)
      .filter((text) => !text.textContent.toLowerCase().includes(term))
      .forEach((text) => text.classList.add("filtered")); 
    Array.from(list.children)
      .filter((text) => text.textContent.toLowerCase().includes(term))
      .forEach((text) => text.classList.remove("filtered"));
    
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
    filtertexts(term);
});
function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();
    // get the text
    let title = newToDoText.value;
    // create a new li
    let newLi = document.createElement('li');
    // create a new input
    let checkbox = document.createElement('input');

    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Delete";
    btn.className = "mdl-button mdl-js-button mdl-js-ripple-effect";

    // set the input's type to checkbox
    checkbox.type = "checkbox";
    checkbox.className = "mdl-button mdl-js-button";
    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);
    newLi.appendChild(btn);

    // attach the li to the ul
    toDoList.appendChild(newLi);
    btn.addEventListener('click', function(event){
      toDoList.removeChild(this.parentElement);
    })

    //empty the input
    newToDoText.value = '';

  });



}

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};

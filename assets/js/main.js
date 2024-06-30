

// Seleccionar todos los elementos del menú
let list = document.querySelectorAll(".navigation li");

// Función para agregar la clase 'hovered' al elemento seleccionado
function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
  
  // Mostrar la sección correspondiente
  let target = this.getAttribute("data-target");
  let contents = document.querySelectorAll(".main .content");
  contents.forEach((content) => {
    if (content.id === target) {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
}

// Agregar eventos de clic a los elementos del menú
list.forEach((item) => item.addEventListener("click", activeLink));

// Manejar el menú toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};





// // add hovered class to selected list item
// let list = document.querySelectorAll(".navigation li");

// function activeLink() {
//   list.forEach((item) => {
//     item.classList.remove("hovered");
//   });
//   this.classList.add("hovered");
// }

// list.forEach((item) => item.addEventListener("mouseover", activeLink));

// // Menu Toggle
// let toggle = document.querySelector(".toggle");
// let navigation = document.querySelector(".navigation");
// let main = document.querySelector(".main");

// toggle.onclick = function () {
//   navigation.classList.toggle("active");
//   main.classList.toggle("active");
// };






"use strict";

//CONSTANTES
const inputAside = document.querySelector(".js-aside");
const btnAside = document.querySelector(".js-btn-tareas");
const inputForm = document.querySelector(".js-inputBuscar");
const btnForm = document.querySelector(".js-btn-Buscar");
const listElement = document.querySelector(".js-ul");

let tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];

//FUNCIONES
function handleClick(event) {
  const valor = inputAside.value;
  alert(valor);
}
function paintTarea() {
  listElement.innerHTML = ""; // Limpiamos el HTML para que no se repitan las tareas
  for (const task of tasks) {
    if (task.completed === true) {
      listElement.innerHTML += `<li class="tarea-completada"><input type="checkbox" id="${task.id}" name="${task.name}" checked> ${task.name}</li>`;
    } else {
      listElement.innerHTML += `<li><input id="${task.id}" name="${task.name}"type="checkbox">${task.name}</li>`;
    }
  }
}

paintTarea();

//EVENTOS
btnAside.addEventListener("click", handleClick);

const handleClickList = (event) => {
  const tasksId = parseInt(event.target.id); // Obtengo el id del checkbox clickado por la usuaria
  console.log(event.target);
  if (!tasksId) return; // Si no ha pulsado en el checkbox, no queremos hacer nada y salimos de la función
  console.log(tasksId);

  // Usar find para encontrar el objeto con id = el que clicke la usuaria
  const elementoAEditar = tasks.find((item) => item.id === tasksId);

  // Modificar el elemento
  if (elementoAEditar.completed === false) {
    elementoAEditar.completed = true;
  } else {
    elementoAEditar.completed = false;
  }
  paintTarea();

  console.log(tasks);
};

listElement.addEventListener("click", handleClickList);

/* 
Crea un evento asociado al botón de buscar de la interfaz gráfica.

Crea la función manejadora del evento anterior.

Dentro de esta función:

Obtenga el valor de la entrada de filtro.

Filtra las tareas que coinciden con el valor introducido por el usuario. (Nos hemos quedado aqui)

Vuelve a pintar las tareas, esta vez utilizando el listado filtrado.  */

function handleClickBuscar(e) {
  e.preventDefault();
  const valor = inputForm.value;
  console.log(valor);

  /*ESto no nos funciona const filtradas = tasks.filter((task) => tasks.includes(valor));
  console.log(filtradas); */
}

btnForm.addEventListener("click", handleClickBuscar);

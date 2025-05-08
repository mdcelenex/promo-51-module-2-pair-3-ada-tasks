'use strict';

//CONSTANTES
const inputAside = document.querySelector(".js-aside");
const btnAside = document.querySelector(".js-btn-tareas");
const inputForm = document.querySelector(".js-inputBuscar");
const btnForm = document.querySelector(".js-btn-Buscar");
const listElement = document.querySelector('.js-ul');



const tasks = [
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
function paintTarea(){
    for (const task of tasks) {
        if (task.completed === true) {
            listElement.innerHTML += `<li class="tarea-completada"><input type="checkbox" id="${task.id}" name="${task.name}" checked> ${task.name}</li>`;

            
        } else {
            listElement.innerHTML += `<li><input id="${task.id}" name="${task.name}"type="checkbox">${task.name}</li>`;
        }
    }
}




paintTarea()


//EVENTOS
btnAside.addEventListener("click", handleClick);





const handleClickList = (event) => {
    const tasks = parseInt(event.target.id); // Obtengo el id del checkbox clickado por la usuaria
    console.log(event.target);
    if (!tasks.id) return; // Si no ha pulsado en el checkbox, no queremos hacer nada y salimos de la función
    
    // Busca la tarea que tenga el id `taskId` en el array `tasks`
    // Una vez que has obtenido la tarea, actualiza la propiedad `completed`
    // Pinta de nuevo las tareas en el html
    
};
  
listElement.addEventListener("click", handleClickList);
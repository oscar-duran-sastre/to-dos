
import { newTaskForm, newTaskInput, newTaskResult, checkGreen, timesRed } from './query-selectors.js';
import { ToDos } from './ToDos.js';
import { tasksToDo } from './store.js';

const formInput = () => {
    newTaskForm.addEventListener('submit', event => {
        event.preventDefault();
        const newTask = newTaskInput.value;
        const resultInputTextId = inputTextId(tasksToDo.length);
        const newInput = new ToDos(resultInputTextId, newTask, '', false);
        tasksToDo.push(newInput);
        console.log(tasksToDo);
        return showTasksList(newTask);
    });
};

// Previene index negativo cuando añadimos el primer objeto al array.
const inputTextId = (value) => {
    if (value - 1 < 0) {
        return 0;
    } {
        return value;
    };
};

const showTasksList = (title) => {
    newTaskForm.reset();
    newTaskResult.innerHTML = '';
    tasksToDo.forEach((value) => {
        newTaskResult.insertAdjacentHTML('beforeEnd',
            `<div class="d-flex justify-content-between mt-3"><span>${value.title}</span> 
            <wrap><button type="submit" class="checkGreen" id="${value.id + 'green'}"><i class="fas fa-check-circle"></i></button> 
            <button type="submit" class="timesRed" id="${value.id + 'red'}"><i class="fas fa-times-circle"></i></button></wrap></div>`);
        return;
    });

    newTaskResult.addEventListener('click', event => {
        event.preventDefault();
        const checksAndTimes = event.target.parentNode.id;


    })
};

formInput();
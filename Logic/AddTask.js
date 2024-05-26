import { DeleteTask } from "./DeleteTask.js";
import { UpdateProgressbar } from "./UpdateProgressBar.js";
const TaskList = document.querySelector('ul');
const Input = document.querySelector('input[type="text"]');
const FormSubmitTask = document.querySelector("#TaskForm");
let CheckboxID = 1;
const AddTask = (event) => {
    event.preventDefault();
    if (Input && TaskList && Input.value.trim() !== "") {
        const ListHtml = ` 
        <li id="Task">
            <div class="ContenedorPrincipal">
                <div class="check" >
                    <input type="checkbox" id = ${CheckboxID.toString()} class="allcheckbox">
                    <label for= ${CheckboxID.toString()} > ${Input.value} </label>
                </div>
            <div class= "eliminar">
                <button id="garbage">
                    <img src="./images/Delete.svg" alt="garbage" id="ImageGarbage">
                </button>
            </div>
            </div>
        </li>`;
        TaskList.insertAdjacentHTML("afterbegin", ListHtml);
        Input.value = "";
        const DeleteTaskButton = document.getElementById("garbage");
        const Task = document.getElementById("Task");
        DeleteTaskButton?.addEventListener('click', () => {
            DeleteTask(Task);
        });
        const TaskCheckBox = document.getElementById(CheckboxID.toString());
        TaskCheckBox?.addEventListener('click', UpdateProgressbar);
        CheckboxID++;
    }
};
export { AddTask };

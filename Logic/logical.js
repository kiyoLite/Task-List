"use strict";
const Input = document.querySelector('input[type="text"]');
const AddTaskButton = document.getElementById('anexar');
const ProgressBar = document.querySelector('progress');
const TextPorgressBar = document.querySelector('p');
const TaskList = document.querySelector('ul');
// this variable is using for genere unique id to each checkbox
let CheckboxID = 0;
let AllCheckbox = document.getElementsByClassName('allcheck');
let Porcent = () => {
    if (ProgressBar && TextPorgressBar && AllCheckbox) {
        let ProgressbarValue = +ProgressBar.getAttribute('value');
        let IncreaseProgressBar;
        clearInterval(IncreaseProgressBar);
        let CheckboxesChecked = 0;
        for (let i = 0; i < AllCheckbox.length; i++) {
            if (AllCheckbox[i].checked === true) {
                CheckboxesChecked++;
            }
        }
        const CheckedPorcent = Math.floor((CheckboxesChecked / AllCheckbox.length) * 100);
        // multiply  CheckedPorcent for "100" because is the max value from progress element
        const CheckedPorcentToNum = 100 * CheckedPorcent / 100;
        TextPorgressBar.textContent = CheckedPorcent.toString() + '%';
        if (ProgressbarValue < CheckedPorcentToNum) {
            IncreaseProgressBar = setInterval(() => {
                ProgressbarValue++;
                ProgressBar.setAttribute('value', ProgressbarValue.toString());
                if (ProgressbarValue == CheckedPorcentToNum) {
                    clearInterval(IncreaseProgressBar);
                }
            }, 20);
        }
        else if (ProgressbarValue > CheckedPorcentToNum) {
            IncreaseProgressBar = setInterval(() => {
                ProgressbarValue--;
                ProgressBar.setAttribute('value', ProgressbarValue.toString());
                if (ProgressbarValue == CheckedPorcentToNum) {
                    clearInterval(IncreaseProgressBar);
                }
            }, 20);
        }
        else {
            clearInterval(IncreaseProgressBar);
        }
    }
};
const MainFunction = () => {
    if (Input && TaskList && Input.value.trim() !== "") {
        const ListHtml = ` 
        <li id="proof">
            <div class="ContenedorPrincipal">
                <div class="check" >
                    <input type="checkbox" id = ${CheckboxID.toString()}>
                    <label for= ${CheckboxID.toString()} > ${Input.value} </label>
                </div>
            <div class= "eliminar">
                <button><i class= "fa-solid fa-trash" id="garbage"> </i> </button>
            </div>
            </div>
        </li>`;
        TaskList.insertAdjacentHTML("afterbegin", ListHtml);
        Input.value = "";
        const DeleteTaskButton = document.getElementById("garbage");
        const Task = document.getElementById("proof");
        if (DeleteTaskButton) {
            DeleteTaskButton.addEventListener('click', () => {
                if (TaskList) {
                    Task?.remove();
                    Porcent();
                }
            });
        }
        const InputCheckbox = document.getElementById(CheckboxID.toString());
        InputCheckbox?.addEventListener('click', Porcent);
        CheckboxID++;
    }
};
if (AddTaskButton && Input) {
    AddTaskButton.addEventListener('click', MainFunction);
    AddTaskButton.addEventListener('click', Porcent);
    Input.addEventListener('keydown', (e) => {
        if (e.key == "Enter") {
            MainFunction();
            Porcent();
        }
    });
}

const Input = document.querySelector('input[type="text"]') as HTMLInputElement | null
const AddTaskButton = document.getElementById('anexar') as HTMLButtonElement | null
const ProgressBar = document.querySelector('progress') as HTMLProgressElement | null
const TextPorgressBar = document.querySelector('p') as HTMLParagraphElement | null
const TaskList = document.querySelector('ul') as HTMLUListElement | null
// this variable is using for genere unique id to each checkbox
let CheckboxID = 0;
let AllCheckbox = document.getElementsByClassName('allcheck') as HTMLCollectionOf<HTMLInputElement>


let Porcent = () => {
    if (ProgressBar && TextPorgressBar && AllCheckbox) {
        let ProgressbarValue: number = +ProgressBar.getAttribute('value')!
        let IncreaseProgressBar: ReturnType<typeof setInterval> | undefined;

        clearInterval(IncreaseProgressBar);

        let CheckboxesChecked: number = 0
        for (let i: number = 0; i < AllCheckbox.length; i++) {
            if (AllCheckbox[i].checked === true) {
                CheckboxesChecked++
            }
        }
        const CheckedPorcent: number = Math.floor((CheckboxesChecked / AllCheckbox.length) * 100);
        // multiply  CheckedPorcent for "100" because is the max value from progress element
        const CheckedPorcentToNum = 100 * CheckedPorcent / 100;
        TextPorgressBar.textContent = CheckedPorcent.toString() + '%'

        if (ProgressbarValue < CheckedPorcentToNum) {
            IncreaseProgressBar = setInterval(() => {
                ProgressbarValue++
                ProgressBar.setAttribute('value', ProgressbarValue.toString())
                if (ProgressbarValue == CheckedPorcentToNum) {
                    clearInterval(IncreaseProgressBar)
                }
            }, 20)
        }
        else if (ProgressbarValue > CheckedPorcentToNum) {
            IncreaseProgressBar = setInterval(() => {
                ProgressbarValue--
                ProgressBar.setAttribute('value', ProgressbarValue.toString())
                if (ProgressbarValue == CheckedPorcentToNum) {
                    clearInterval(IncreaseProgressBar)
                }
            }, 20)
        }
        else {
            clearInterval(IncreaseProgressBar)
        }
    }
}

const MainFunction = (): void => {
    if (Input && TaskList && Input.value.trim() !== "") {
        const ListHtml: string = ` 
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
        </li>`
        TaskList.insertAdjacentHTML("afterbegin", ListHtml);
        Input.value = ""
        const DeleteTaskButton = document.getElementById("garbage")
        const Task = document.getElementById("proof");
        if (DeleteTaskButton) {
            DeleteTaskButton.addEventListener('click', () => {
                if (TaskList) {
                    Task?.remove()
                    Porcent()
                }
            })
        }
        const InputCheckbox = document.getElementById(CheckboxID.toString());
        InputCheckbox?.addEventListener('click', Porcent)
        CheckboxID++

    }
}

if (AddTaskButton && Input) {
    AddTaskButton.addEventListener('click', MainFunction)
    AddTaskButton.addEventListener('click', Porcent)

    Input.addEventListener('keydown', (e) => {
        if (e.key == "Enter") {
            MainFunction();
            Porcent();
        }
    })
}

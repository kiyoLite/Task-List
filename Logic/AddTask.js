const TaskList = document.querySelector('ul');
const Input = document.querySelector('input[type="text"]');
let CheckboxID = 1;
const MainFunction2 = () => {
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
        CheckboxID++;
    }
};
export { MainFunction2 };

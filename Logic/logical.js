"use strict";
const TextoInput = document.querySelector('input[type="text"]');
const BotonAnadir = document.getElementById('anexar');
const BarraProgreso = document.querySelector('progress');
const TextBarra = document.querySelector('p');
const UlElement = document.querySelector('ul');
let contador1 = 0;
let AllCheck = document.getElementsByClassName('allcheck');
let porcentaje = () => {
    if (BarraProgreso && TextBarra && AllCheck) {
        let barraValor = +BarraProgreso.getAttribute('value');
        let aumentarValorBarra;
        clearInterval(aumentarValorBarra);
        let contadorCheck = 0;
        for (let i = 0; i < AllCheck.length; i++) {
            if (AllCheck[i].checked === true) {
                contadorCheck++;
            }
        }
        const CheckedPorcent = Math.floor((contadorCheck / AllCheck.length) * 100);
        const CheckedPorcentToNum = barraValor * CheckedPorcent / 100;
        TextBarra.textContent = CheckedPorcent.toString() + '%';
        if (barraValor < CheckedPorcentToNum) {
            aumentarValorBarra = setInterval(() => {
                barraValor++;
                BarraProgreso.setAttribute('value', barraValor.toString());
                if (barraValor == CheckedPorcentToNum) {
                    clearInterval(aumentarValorBarra);
                }
            }, 100);
        }
        else if (barraValor > CheckedPorcentToNum) {
            aumentarValorBarra = setInterval(() => {
                barraValor--;
                BarraProgreso.setAttribute('value', barraValor.toString());
                if (barraValor == CheckedPorcentToNum) {
                    clearInterval(aumentarValorBarra);
                }
            }, 100);
        }
        else {
            clearInterval(aumentarValorBarra);
        }
    }
};
const FuncionPrincipal = () => {
    if (TextoInput && UlElement && TextoInput.value.trim() !== "") {
        const ListHtml = ` 
        <li id="proof">
            <div class="ContenedorPrincipal">
                <div class="check" >
                    <input type="checkbox" id = "verificar">
                    <label for= "verificar" > ${TextoInput.value} </label>
                </div>
            <div class= "eliminar">
                <button><i class= "fa-solid fa-trash" id="garbage"> </i> </button>
            </div>
            </div>
        </li>`;
        UlElement.insertAdjacentHTML("afterbegin", ListHtml);
        TextoInput.value = "";
        const DeleteTaskButton = document.getElementById("garbage");
        const Task = document.getElementById("proof");
        if (DeleteTaskButton) {
            DeleteTaskButton.addEventListener('click', () => {
                if (UlElement) {
                    Task?.remove();
                    porcentaje();
                }
            });
        }
        const InputCheckbox = document.getElementById("checkbox");
        InputCheckbox?.addEventListener('click', porcentaje);
        contador1++;
    }
};
if (BotonAnadir && TextoInput) {
    BotonAnadir.addEventListener('click', FuncionPrincipal);
    BotonAnadir.addEventListener('click', porcentaje);
    TextoInput.addEventListener('keydown', (e) => {
        if (e.key == "Enter") {
            FuncionPrincipal();
            porcentaje();
        }
    });
}

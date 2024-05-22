const TextoInput = document.querySelector('input[type="text"]') as HTMLInputElement | null
const BotonAnadir = document.getElementById('anexar') as HTMLButtonElement | null
const BarraProgreso = document.querySelector('progress') as HTMLProgressElement | null
const TextBarra = document.querySelector('p') as HTMLParagraphElement | null
const UlElement = document.querySelector('ul') as HTMLUListElement | null
let contador1: number = 0
let AllCheck = document.getElementsByClassName('allcheck') as HTMLCollectionOf<HTMLInputElement>

let porcentaje = () => {
    if (BarraProgreso && TextBarra && AllCheck) {
        let barraValor: number = +BarraProgreso.getAttribute('value')!
        let aumentarValorBarra: ReturnType<typeof setInterval> | undefined;

        clearInterval(aumentarValorBarra);

        let contadorCheck: number = 0
        for (let i: number = 0; i < AllCheck.length; i++) {
            if (AllCheck[i].checked === true) {
                contadorCheck++
            }
        }
        const CheckedPorcent: number = Math.floor((contadorCheck / AllCheck.length) * 100);
        // multiply  CheckedPorcent for "100" because is the max value from progress element
        const CheckedPorcentToNum = 100 * CheckedPorcent / 100;
        TextBarra.textContent = CheckedPorcent.toString() + '%'

        if (barraValor < CheckedPorcentToNum) {
            aumentarValorBarra = setInterval(() => {
                barraValor++
                BarraProgreso.setAttribute('value', barraValor.toString())
                if (barraValor == CheckedPorcentToNum) {
                    clearInterval(aumentarValorBarra)
                }
            }, 20)
        }
        else if (barraValor > CheckedPorcentToNum) {
            aumentarValorBarra = setInterval(() => {
                barraValor--
                BarraProgreso.setAttribute('value', barraValor.toString())
                if (barraValor == CheckedPorcentToNum) {
                    clearInterval(aumentarValorBarra)
                }
            }, 20)
        }
        else {
            clearInterval(aumentarValorBarra)
        }
    }
}

const FuncionPrincipal = (): void => {
    if (TextoInput && UlElement && TextoInput.value.trim() !== "") {
        const ListHtml: string = ` 
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
        </li>`
        UlElement.insertAdjacentHTML("afterbegin", ListHtml);
        TextoInput.value = ""
        const DeleteTaskButton = document.getElementById("garbage")
        const Task = document.getElementById("proof");
        if (DeleteTaskButton) {
            DeleteTaskButton.addEventListener('click', () => {
                if (UlElement) {
                    Task?.remove()
                    porcentaje()
                }
            })
        }
        const InputCheckbox = document.getElementById("checkbox");
        InputCheckbox?.addEventListener('click', porcentaje)
        contador1++
    }
}

if (BotonAnadir && TextoInput) {
    BotonAnadir.addEventListener('click', FuncionPrincipal)
    BotonAnadir.addEventListener('click', porcentaje)

    TextoInput.addEventListener('keydown', (e) => {
        if (e.key == "Enter") {
            FuncionPrincipal();
            porcentaje();
        }
    })
}

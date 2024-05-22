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
        let aumentarValorBarra: ReturnType<typeof setTimeout> | ReturnType<typeof clearInterval>;
        aumentarValorBarra = clearInterval(aumentarValorBarra)

        let contadorCheck: number = 0
        for (let i: number = 0; i < AllCheck.length; i++) {
            if (AllCheck[i].checked === true) {
                contadorCheck++
            }
        }
        let CantidadChecked: number = Math.floor((contadorCheck / (AllCheck.length)) * 100)
        TextBarra.textContent = CantidadChecked.toString() + '%'

        if (barraValor < PorcentajeToNumber) {
            aumentarValorBarra = setInterval(() => {
                barraValor++
                BarraProgreso.setAttribute('value', barraValor.toString())
                if (barraValor == PorcentajeToNumber) {
                    clearInterval(aumentarValorBarra)
                }
            }, 100)
        }
        else if (barraValor > PorcentajeToNumber) {
            aumentarValorBarra = setInterval(() => {
                barraValor--
                BarraProgreso.setAttribute('value', barraValor.toString())
                if (barraValor == PorcentajeToNumber) {
                    clearInterval(aumentarValorBarra)
                }
            }, 100)
        }
        else {
            clearInterval(aumentarValorBarra)
        }
    }
}

const FuncionPrincipal = (): void => {
    if (TextoInput && UlElement && TextoInput.value.trim() !== "") {
        const ListHtml: string = ` 
        < li >
            <div class="ContenedorPrincipal" >
                <div class="check" >
                    <input type="checkbox" id = "verificar" >
                    <label for= "verificar" > ejemplo < /label>
                < /div>
            < div class= "eliminar" >
                <button><i class= "fa-solid fa-trash" > </i> < /button>
            < /div>
            < /div>
        < /li>`


        const CrearLi = document.createElement('li')
        UlElement.insertAdjacentElement('afterbegin', CrearLi)
        const DivPrincipal = document.createElement('div')
        DivPrincipal.classList.add("ContenedorPrincipal")
        CrearLi.insertAdjacentElement('afterbegin', DivPrincipal)
        const DivSegundario = document.createElement('div')
        DivSegundario.classList.add("check")
        DivPrincipal.insertAdjacentElement('afterbegin', DivSegundario)
        const InputCheckbox = document.createElement('input')
        InputCheckbox.type = "checkbox"
        InputCheckbox.classList.add('allcheck')
        InputCheckbox.setAttribute('id', contador1.toString())
        DivSegundario.insertAdjacentElement('afterbegin', InputCheckbox)
        const LabelInput = document.createElement('label')
        LabelInput.setAttribute('for', contador1.toString())
        LabelInput.textContent = TextoInput.value
        InputCheckbox.insertAdjacentElement('afterend', LabelInput)
        const DivSegundario2 = document.createElement('div')
        DivSegundario2.classList.add('eliminar')
        DivPrincipal.insertAdjacentElement('beforeend', DivSegundario2)
        const BotonEliminar = document.createElement('button')
        DivSegundario2.insertAdjacentElement('afterbegin', BotonEliminar)
        const IconoBasura = document.createElement('i')
        IconoBasura.classList.add('fa-solid')
        IconoBasura.classList.add('fa-trash')
        BotonEliminar.insertAdjacentElement('afterbegin', IconoBasura)
        TextoInput.value = ""
        BotonEliminar.addEventListener('click', () => {
            if (UlElement && CrearLi) {
                UlElement.removeChild(CrearLi)
                porcentaje()
            }
        })
        InputCheckbox.addEventListener('click', porcentaje)
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

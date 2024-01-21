const TextoInput = document.querySelector('input[type="text"]') as HTMLInputElement
const BotonAnadir = document.getElementById('anexar') as HTMLButtonElement
const BarraProgreso = document.getElementsByTagName('progress')
const TextBarra = document.querySelector('p')!
const UlElement = document.querySelector('ul')!
let contador1: number = 0
let AllCheck = document.getElementsByClassName('allcheck')!



var porcentaje = () => {
    let contadorCheck = 0
    for (let i = 0; i < AllCheck.length; i++) {
        if ((AllCheck[i] as HTMLInputElement).checked === true) {
            contadorCheck++
        }
    }
    let CantidadChecked = Math.floor((contadorCheck / (AllCheck.length)) * 100)
    TextBarra.textContent = CantidadChecked.toString() + '%'


}



const FuncionPrincipal = (): void => {

    if (TextoInput.value.trim() !== "") {
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
        // BotonEliminar.addEventListener('click', porcentaje)
        BotonEliminar.addEventListener('click', () => {
            UlElement.removeChild(CrearLi)
        })
        InputCheckbox.addEventListener('click', porcentaje)
        contador1++
    }
}




BotonAnadir.addEventListener('click', FuncionPrincipal)
BotonAnadir.addEventListener('click', porcentaje)

TextoInput.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        FuncionPrincipal();
        porcentaje();

    }
})

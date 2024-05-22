const TextoInput = document.querySelector('input[type="text"]');
const BotonAnadir = document.getElementById('anexar');
const BarraProgreso = document.querySelector('progress');
const TextBarra = document.querySelector('p');
const UlElement = document.querySelector('ul');
let contador1 = 0;
let AllCheck = document.getElementsByClassName('allcheck');
let porcentaje = () => {
    let barraValor = +BarraProgreso.getAttribute('value');
    let aumentarValorBarra;
    aumentarValorBarra = clearInterval(aumentarValorBarra);
    let contadorCheck = 0;
    for (let i = 0; i < AllCheck.length; i++) {
        if (AllCheck[i].checked === true) {
            contadorCheck++;
        }
    }
    let CantidadChecked = Math.floor((contadorCheck / (AllCheck.length)) * 100);
    TextBarra.textContent = CantidadChecked.toString() + '%';
    let PorcentajeToNumber = Math.floor((contadorCheck / AllCheck.length) * 100);
    if (barraValor < PorcentajeToNumber) {
        aumentarValorBarra = setInterval(() => {
            barraValor++;
            BarraProgreso.setAttribute('value', barraValor.toString());
            if (barraValor == PorcentajeToNumber) {
                clearInterval(aumentarValorBarra);
            }
        }, 20);
    }
    else if (barraValor > PorcentajeToNumber) {
        aumentarValorBarra = setInterval(() => {
            barraValor--;
            BarraProgreso.setAttribute('value', barraValor.toString());
            if (barraValor == PorcentajeToNumber) {
                clearInterval(aumentarValorBarra);
            }
        }, 20);
    }
    else {
        clearInterval(aumentarValorBarra);
    }
};
const FuncionPrincipal = () => {
    if (TextoInput.value.trim() !== "") {
        const CrearLi = document.createElement('li');
        UlElement.insertAdjacentElement('afterbegin', CrearLi);
        const DivPrincipal = document.createElement('div');
        DivPrincipal.classList.add("ContenedorPrincipal");
        CrearLi.insertAdjacentElement('afterbegin', DivPrincipal);
        const DivSegundario = document.createElement('div');
        DivSegundario.classList.add("check");
        DivPrincipal.insertAdjacentElement('afterbegin', DivSegundario);
        const InputCheckbox = document.createElement('input');
        InputCheckbox.type = "checkbox";
        InputCheckbox.classList.add('allcheck');
        InputCheckbox.setAttribute('id', contador1.toString());
        DivSegundario.insertAdjacentElement('afterbegin', InputCheckbox);
        const LabelInput = document.createElement('label');
        LabelInput.setAttribute('for', contador1.toString());
        LabelInput.textContent = TextoInput.value;
        InputCheckbox.insertAdjacentElement('afterend', LabelInput);
        const DivSegundario2 = document.createElement('div');
        DivSegundario2.classList.add('eliminar');
        DivPrincipal.insertAdjacentElement('beforeend', DivSegundario2);
        const BotonEliminar = document.createElement('button');
        DivSegundario2.insertAdjacentElement('afterbegin', BotonEliminar);
        const IconoBasura = document.createElement('i');
        IconoBasura.classList.add('fa-solid');
        IconoBasura.classList.add('fa-trash');
        BotonEliminar.insertAdjacentElement('afterbegin', IconoBasura);
        TextoInput.value = "";
        // BotonEliminar.addEventListener('click', porcentaje)
        BotonEliminar.addEventListener('click', () => {
            UlElement.removeChild(CrearLi);
            porcentaje();
        });
        InputCheckbox.addEventListener('click', porcentaje);
        contador1++;
    }
};
BotonAnadir.addEventListener('click', FuncionPrincipal);
BotonAnadir.addEventListener('click', porcentaje);
TextoInput.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        FuncionPrincipal();
        porcentaje();
    }
});
// console.log(BarraProgreso.getAttribute('value'))

var TextoInput = document.querySelector('input[type="text"]');
var BotonAnadir = document.getElementById('anexar');
var BarraProgreso = document.getElementsByTagName('progress');
var TextBarra = document.querySelector('p');
var UlElement = document.querySelector('ul');
var contador1 = 0;
var AllCheck = document.getElementsByClassName('allcheck');
var porcentaje = function () {
    var contadorCheck = 0;
    for (var i = 0; i < AllCheck.length; i++) {
        if (AllCheck[i].checked === true) {
            contadorCheck++;
        }
    }
    var CantidadChecked = Math.floor((contadorCheck / (AllCheck.length)) * 100);
    TextBarra.textContent = CantidadChecked.toString() + '%';
};
var FuncionPrincipal = function () {
    if (TextoInput.value.trim() !== "") {
        var CrearLi_1 = document.createElement('li');
        UlElement.insertAdjacentElement('afterbegin', CrearLi_1);
        var DivPrincipal = document.createElement('div');
        DivPrincipal.classList.add("ContenedorPrincipal");
        CrearLi_1.insertAdjacentElement('afterbegin', DivPrincipal);
        var DivSegundario = document.createElement('div');
        DivSegundario.classList.add("check");
        DivPrincipal.insertAdjacentElement('afterbegin', DivSegundario);
        var InputCheckbox = document.createElement('input');
        InputCheckbox.type = "checkbox";
        InputCheckbox.classList.add('allcheck');
        InputCheckbox.setAttribute('id', contador1.toString());
        DivSegundario.insertAdjacentElement('afterbegin', InputCheckbox);
        var LabelInput = document.createElement('label');
        LabelInput.setAttribute('for', contador1.toString());
        LabelInput.textContent = TextoInput.value;
        InputCheckbox.insertAdjacentElement('afterend', LabelInput);
        var DivSegundario2 = document.createElement('div');
        DivSegundario2.classList.add('eliminar');
        DivPrincipal.insertAdjacentElement('beforeend', DivSegundario2);
        var BotonEliminar = document.createElement('button');
        DivSegundario2.insertAdjacentElement('afterbegin', BotonEliminar);
        var IconoBasura = document.createElement('i');
        IconoBasura.classList.add('fa-solid');
        IconoBasura.classList.add('fa-trash');
        BotonEliminar.insertAdjacentElement('afterbegin', IconoBasura);
        TextoInput.value = "";
        BotonEliminar.addEventListener('click', function () {
            UlElement.removeChild(CrearLi_1);
        });
        InputCheckbox.addEventListener('click', porcentaje);
        contador1++;
    }
};
BotonAnadir.addEventListener('click', FuncionPrincipal);
BotonAnadir.addEventListener('click', porcentaje);
TextoInput.addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
        FuncionPrincipal();
        porcentaje();
    }
});

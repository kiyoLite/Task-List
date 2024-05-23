let AllCheckbox = document.getElementsByClassName('allcheck');
const ProgressBar = document.querySelector('progress');
let Porcent = () => {
    if (ProgressBar && AllCheckbox) {
        let ProgressbarValue = +ProgressBar.getAttribute('value');
        let CheckboxesChecked = 0;
        for (let i = 0; i < AllCheckbox.length; i++) {
            if (AllCheckbox[i].checked === true) {
                CheckboxesChecked++;
            }
        }
        const CheckedPorcent = Math.floor((CheckboxesChecked / AllCheckbox.length) * 100);
    }
};
export { Porcent };

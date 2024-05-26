let AllCheckbox = document.getElementsByClassName('allcheckbox');
const ProgressBar = document.querySelector('progress');
let CheckedPorcent = -1;
let Porcent = () => {
    if (ProgressBar && AllCheckbox) {
        let ProgressbarValue = +ProgressBar.getAttribute('value');
        let CheckboxesChecked = 0;
        for (let i = 0; i < AllCheckbox.length; i++) {
            if (AllCheckbox[i].checked === true) {
                CheckboxesChecked++;
            }
        }
        CheckedPorcent = Math.floor((CheckboxesChecked / AllCheckbox.length) * 100);
    }
    return CheckedPorcent;
};
export { Porcent };

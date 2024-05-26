let AllCheckbox = document.getElementsByClassName('allcheckbox') as HTMLCollectionOf<HTMLInputElement>
const ProgressBar = document.querySelector('progress') as HTMLProgressElement | null
let CheckedPorcent = -1;
let Porcent = () => {
    if (ProgressBar && AllCheckbox) {
        let ProgressbarValue: number = +ProgressBar.getAttribute('value')!




        let CheckboxesChecked: number = 0
        for (let i: number = 0; i < AllCheckbox.length; i++) {
            if (AllCheckbox[i].checked === true) {
                CheckboxesChecked++
            }
        }
        CheckedPorcent = Math.floor((CheckboxesChecked / AllCheckbox.length) * 100);
    }
    return CheckedPorcent;
}

export { Porcent };
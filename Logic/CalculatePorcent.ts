let AllCheckbox = document.getElementsByClassName('allcheck') as HTMLCollectionOf<HTMLInputElement>
const ProgressBar = document.querySelector('progress') as HTMLProgressElement | null

let Porcent = () => {
    if (ProgressBar && AllCheckbox) {
        let ProgressbarValue: number = +ProgressBar.getAttribute('value')!




        let CheckboxesChecked: number = 0
        for (let i: number = 0; i < AllCheckbox.length; i++) {
            if (AllCheckbox[i].checked === true) {
                CheckboxesChecked++
            }
        }
        const CheckedPorcent: number = Math.floor((CheckboxesChecked / AllCheckbox.length) * 100);
    }
}

export { Porcent };
import { Porcent } from "./CalculatePorcent.js";
const ProgressBar = document.querySelector('progress') as HTMLProgressElement | null
const TextPorgressBar = document.querySelector('p') as HTMLParagraphElement | null
let IncreaseProgressBar: ReturnType<typeof setInterval> | undefined;

const UptadeTextProgressBar = function (TotalCheckboxChecked: number) {

    const CheckedPorcentToNum = 100 * TotalCheckboxChecked / 100;
    if (TextPorgressBar) {
        TextPorgressBar.textContent = CheckedPorcentToNum.toString() + "%";
    }
}
const UpdateProgressbar = function () {
    if (ProgressBar) {
        const CheckBoxChecked = Porcent();
        UptadeTextProgressBar(CheckBoxChecked);
        let ProgressbarValue = Number(ProgressBar.getAttribute('value'))
        clearInterval(IncreaseProgressBar);

        if (ProgressbarValue < CheckBoxChecked) {
            IncreaseProgressBar = setInterval(() => {
                ProgressbarValue++
                ProgressBar.setAttribute('value', ProgressbarValue.toString())
                if (ProgressbarValue == CheckBoxChecked) {
                    clearInterval(IncreaseProgressBar)

                }
            }, 20)
        }
        else if (ProgressbarValue > CheckBoxChecked) {
            IncreaseProgressBar = setInterval(() => {
                ProgressbarValue--
                ProgressBar.setAttribute('value', ProgressbarValue.toString())
                if (ProgressbarValue == CheckBoxChecked) {
                    clearInterval(IncreaseProgressBar)
                }
            }, 20)
        }
        else {
            clearInterval(IncreaseProgressBar)
        }
    }
}

export { UpdateProgressbar }
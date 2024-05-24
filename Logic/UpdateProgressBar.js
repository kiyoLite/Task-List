import { Porcent } from "./CalculatePorcent.js";
const ProgressBar = document.querySelector('progress');
const TextPorgressBar = document.querySelector('p');
let IncreaseProgressBar;
const UptadeTextProgressBar = function (TotalCheckboxChecked) {
    const CheckedPorcentToNum = 100 * TotalCheckboxChecked / 100;
    if (TextPorgressBar) {
        TextPorgressBar.textContent = CheckedPorcentToNum.toString() + "%";
    }
};
const UpdateProgressbar = function () {
    if (ProgressBar) {
        const CheckBoxChecked = Porcent();
        UptadeTextProgressBar(CheckBoxChecked);
        let ProgressbarValue = Number(ProgressBar.getAttribute('value'));
        clearInterval(IncreaseProgressBar);
        if (ProgressbarValue < CheckBoxChecked) {
            IncreaseProgressBar = setInterval(() => {
                ProgressbarValue++;
                ProgressBar.setAttribute('value', ProgressbarValue.toString());
                if (ProgressbarValue == CheckBoxChecked) {
                    clearInterval(IncreaseProgressBar);
                }
            }, 20);
        }
        else if (ProgressbarValue > CheckBoxChecked) {
            IncreaseProgressBar = setInterval(() => {
                ProgressbarValue--;
                ProgressBar.setAttribute('value', ProgressbarValue.toString());
                if (ProgressbarValue == CheckBoxChecked) {
                    clearInterval(IncreaseProgressBar);
                }
            }, 20);
        }
        else {
            clearInterval(IncreaseProgressBar);
        }
    }
};
export { UpdateProgressbar };

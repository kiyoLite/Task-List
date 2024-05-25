import { Porcent } from "./CalculatePorcent.js"
const DeleteTask = function (Task: HTMLLIElement | null) {
    Task?.remove()
    Porcent()
}
export { DeleteTask }
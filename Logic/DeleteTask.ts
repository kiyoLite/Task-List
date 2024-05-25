
import { UpdateProgressbar } from "./UpdateProgressBar.js"
const DeleteTask = function (Task: HTMLLIElement | null) {
    Task?.remove()
    UpdateProgressbar();
}
export { DeleteTask }
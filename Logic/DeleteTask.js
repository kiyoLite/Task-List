import { UpdateProgressbar } from "./UpdateProgressBar.js";
const DeleteTask = function (Task) {
    Task?.remove();
    UpdateProgressbar();
};
export { DeleteTask };

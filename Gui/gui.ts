import { AddTask } from "../Logic/AddTask.js";
import { UpdateProgressbar } from "../Logic/UpdateProgressBar.js";

const FormSubmitTask = document.querySelector("#TaskForm") as HTMLFormElement | null
const Input = document.querySelector('input[type="text"]') as HTMLInputElement | null


FormSubmitTask?.addEventListener('submit', AddTask);
FormSubmitTask?.addEventListener('submit', UpdateProgressbar);




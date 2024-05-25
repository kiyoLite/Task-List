import { AddTask } from "../Logic/AddTask.js";
import { UpdateProgressbar } from "../Logic/UpdateProgressBar.js";
const FormSubmitTask = document.querySelector("#TaskForm");
const Input = document.querySelector('input[type="text"]');
FormSubmitTask?.addEventListener('submit', AddTask);
FormSubmitTask?.addEventListener('submit', UpdateProgressbar);

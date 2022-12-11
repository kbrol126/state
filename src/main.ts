import { state } from "./state";
import { formEl } from "./components/formEl";
import { list } from "./components/list";

const root = document.querySelector(".root");

list(root);
formEl();

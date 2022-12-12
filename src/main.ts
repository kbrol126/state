import { state } from "./state";
import { formEl } from "./components/formEl";
import { list } from "./components/list";

list();
formEl();
state.suscribe(() => {
  var botones = document.querySelectorAll(".tooltip");
  var lastState = state.getState();

  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const texto = boton.parentNode?.textContent as string;

      state.removeItem(texto);
    });
  });
});

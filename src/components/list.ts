import { state } from "../state";

export function list(contenedor: Element | null) {
  class Listclass extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    connectedCallback() {
      state.suscribe(() => this.render());
    }
    render() {
      var lista = state.getState().list;
      var listEl = document.createElement("ul");
      listEl.setAttribute("class", "list");
      var style = document.createElement("style");
      style.textContent =
        "@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');  .list{padding: 30px} .li{font-family: 'Nunito', sans-serif;list-style:none; margin-bottom:14px; margin-rigth:15px} .checkbox{accent-color: #33691e;margin-right: 15px;}";

      lista.map((item) => {
        const liEl = document.createElement("li");
        liEl.setAttribute("class", "li");

        liEl.innerHTML = `
        <input class="checkbox" type="checkbox" >                   ${item}`;
        listEl.appendChild(liEl);
      });
      listEl.appendChild(style);
      contenedor?.firstChild?.remove();
      contenedor?.appendChild(listEl);
    }
  }

  customElements.define("list-el", Listclass);
}

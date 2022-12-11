import { state } from "../state";

export function formEl() {
  class formclass extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var formEl = document.createElement("form");
      formEl.setAttribute("class", "form");

      var inputEl = document.createElement("input");
      inputEl.setAttribute("class", "input");
      inputEl.setAttribute("name", "text");

      var buttonEl = document.createElement("button");
      buttonEl.setAttribute("class", "button");
      buttonEl.setAttribute("name", "button");
      buttonEl.innerText = `+`;

      var style = document.createElement("style");

      style.textContent =
        ".form{display:flex;justify-content: space-between; padding:10px 30px 0 30px; position:absolute,left:0,right:0} .input{width: 80%;height: 20px;} .button{ heigth:20px}";

      formEl.appendChild(inputEl);
      formEl.appendChild(buttonEl);
      shadow.appendChild(formEl);
      shadow.appendChild(style);
    }
    connectedCallback() {
      const form = this.shadowRoot?.querySelector(".form");
      console.log(form);

      form?.addEventListener("submit", (e) => {
        e.preventDefault();
        const f = e.target as any;
        state.addItem(f.text.value);
      });
    }
  }

  customElements.define("form-el", formclass);
}

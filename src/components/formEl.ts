import { state } from "../state";

export function formEl() {
  class formclass extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      //
      //
      //
      var formEl = document.createElement("form");
      formEl.setAttribute("class", "form");
      //
      //
      //
      var inputEl = document.createElement("input");
      inputEl.setAttribute("class", "input");
      inputEl.setAttribute("name", "text");
      //
      //
      //
      var buttonEl = document.createElement("button");
      buttonEl.setAttribute("class", "cssbuttons-io-button");
      buttonEl.setAttribute("name", "button");
      var divButton = document.createElement("div");
      divButton.setAttribute("class", "icon");
      divButton.innerHTML = `<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>`;
      buttonEl.innerText = `agregar`;

      buttonEl.appendChild(divButton);

      //
      //
      //
      var style = document.createElement("style");
      style.textContent =
        "@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap'); .form{display:flex;gap:10px;align-items: center;justify-content: space-between; padding:10px 30px 0 30px; position:absolute,left:0,right:0} .input{ background: #9e9e9e;box-shadow: inset 0 0 1.6em -0.6em #714da6; border:none;width: 80%;color:white; height: 2.8em; font-family: 'Nunito', sans-serif} .cssbuttons-io-button {    background: #9e9e9e;    color: white;    font-family: inherit;    padding: 0.35em;    padding-left: 1.2em;    font-size: 17px;    font-weight: 500;    border-radius: 0.9em;    border: none;    letter-spacing: 0.05em;    display: flex;    align-items: center;    box-shadow: inset 0 0 1.6em -0.6em #714da6;    overflow: hidden;    position: relative;    height: 2.8em;    padding-right: 3.3em;   }      .cssbuttons-io-button .icon {    background: white;    margin-left: 1em;    position: absolute;    display: flex;    align-items: center;    justify-content: center;    height: 2.2em;    width: 2.2em;    border-radius: 0.7em;    box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;    right: 0.3em;    transition: all 0.3s;   }      .cssbuttons-io-button:hover .icon {    width: calc(100% - 0.6em);   }      .cssbuttons-io-button .icon svg {    width: 1.1em;    transition: transform 0.3s;    color: #7b52b9;   }      .cssbuttons-io-button:hover .icon svg {transform: translateX(0.1em);}      .cssbuttons-io-button:active .icon {    transform: scale(0.95);   }   ";
      //
      //
      //
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

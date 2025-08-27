const html = String.raw;

const template = document.createElement("template");
template.innerHTML = html`<p>Hello, <span></span>!</p>`;

/**
 * This is a simple web component that renders a greeting message.
 * @attr {string} [name="World"] - The name of the person to greet
 */
class HelloWorld extends HTMLElement {
  #span;

  static get observedAttributes() {
    return ["name"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    if (this.#span && name === "name") {
      this.#span.textContent = newValue;
    }
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.#span = this.shadowRoot.querySelector("span");
    this.#span.textContent = this.getAttribute("name") || "World";
  }

  get name() {
    return this.getAttribute("name");
  }

  set name(value) {
    this.setAttribute("name", value);
  }
}

customElements.define("hello-world", HelloWorld);

const html = String.raw;

const template = document.createElement("template");
template.innerHTML = html`<p>Hello, <span></span>!</p>`;

/**
 * This is a simple web component that renders a greeting message.
 * @attr {string} [name] - The name of the person to greet
 * @prop {string} [name=World] - The name of the person to greet
 */
export class HelloWorld extends HTMLElement {
  private span: HTMLSpanElement | undefined | null;

  #name = "World";

  static get observedAttributes() {
    return ["name"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  attributeChangedCallback(
    attrName: string,
    _oldValue: string,
    newValue: string
  ) {
    if (attrName === "name") this.name = newValue;
  }

  connectedCallback() {
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
    this.span = this.shadowRoot?.querySelector("span");
    if (this.span) {
      this.span.textContent = this.getAttribute("name") || "World";
    }
  }

  get name() {
    return this.#name;
  }

  set name(value: string) {
    if (value === this.#name) return;
    this.#name = value;
    if (this.span) this.span.textContent = value;
    this.setAttribute("name", value);
  }
}

customElements.define("hello-world", HelloWorld);

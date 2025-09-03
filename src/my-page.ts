const html = String.raw;

const template = document.createElement("template");
template.innerHTML = html`
  <main>
    <hello-world name="Page"></hello-world>
    <traffic-light state="yield"></traffic-light>
  </main>
`;

/**
 * This is an example of a page component.
 */
export class MyPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("my-page", MyPage);

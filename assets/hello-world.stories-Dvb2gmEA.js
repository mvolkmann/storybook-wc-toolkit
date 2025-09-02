import{g as d}from"./iframe-CZ55b5oo.js";const p=String.raw,m=document.createElement("template");m.innerHTML=p`<p>Hello, <span></span>!</p>`;class i extends HTMLElement{static get observedAttributes(){return["name"]}constructor(){super(),this.attachShadow({mode:"open"})}attributeChangedCallback(e,a,t){this.span&&e==="name"&&(this.span.textContent=t)}connectedCallback(){this.shadowRoot?.appendChild(m.content.cloneNode(!0)),this.span=this.shadowRoot?.querySelector("span"),this.span&&(this.span.textContent=this.getAttribute("name")||"World")}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}}customElements.define("hello-world",i);const{expect:n}=__STORYBOOK_MODULE_TEST__,{events:u,args:h,argTypes:T,template:x}=d("hello-world"),W={title:"Components/HelloWorld",component:"hello-world",args:h,argTypes:T,render:o=>x(o),parameters:{actions:{handles:u}},tags:["autodocs"]},r={play:({canvasElement:o})=>{const e=o.querySelector("hello-world");n(e).toBeInTheDocument();function a(c){const s=e.shadowRoot?.querySelector("p");n(s).toBeInTheDocument(),n(s).toHaveTextContent(`Hello, ${c}!`)}let t="World";a(t),t="Tami",e.setAttribute("name",t),n(e).toHaveProperty("name",t),a(t),t="Comet",e.name=t,n(e).toHaveAttribute("name",t),a(t),e.name="World"}},l={args:{name:"Mark"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: ({
    canvasElement
  }) => {
    const helloWorld = canvasElement.querySelector("hello-world") as HelloWorld;
    expect(helloWorld).toBeInTheDocument();
    function verifyText(name: string) {
      const p = helloWorld.shadowRoot?.querySelector("p");
      expect(p).toBeInTheDocument();
      expect(p).toHaveTextContent(\`Hello, \${name}!\`);
    }
    let name = "World";
    // The "name" attribute is not set yet.
    verifyText(name);

    // Set the "name" attribute.
    name = "Tami";
    helloWorld.setAttribute("name", name);
    expect(helloWorld).toHaveProperty("name", name);
    verifyText(name);

    // Set the "name" property.
    name = "Comet";
    helloWorld.name = name;
    expect(helloWorld).toHaveAttribute("name", name);
    verifyText(name);
    helloWorld.name = "World"; // return to default value
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Mark"
  }
}`,...l.parameters?.docs?.source}}};const g=["Default","Named"];export{r as Default,l as Named,g as __namedExportsOrder,W as default};

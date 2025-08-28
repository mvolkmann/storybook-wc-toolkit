import{g as p}from"./index-DIZMXvr2.js";import"./iframe-DVR6QbuJ.js";import"./preload-helper-D9Z9MdNV.js";const h=String.raw,i=document.createElement("template");i.innerHTML=h`
  <style>
    button {
      display: inline-flex;
      flex-direction: column;
      gap: 0.5rem;

      background-color: black;
      border-radius: 1.5rem;
      padding: 0.5rem;
    }
    div {
      --size: 3rem;
      border: none;
      border-radius: 50%;
      font-weight: bold;
      padding: 0.5rem;
      height: var(--size);
      width: var(--size);

      opacity: 0.4;
      &.on {
        opacity: 1;
      }
    }
    .stop {
      background-color: red;
    }
    .yield {
      background-color: yellow;
    }
    .go {
      background-color: lawngreen;
    }
  </style>
  <button aria-label="traffic light" type="button">
    <div class="stop"></div>
    <div class="yield"></div>
    <div class="go"></div>
  </button>
`;class s extends HTMLElement{static states=["stop","yield","go"];#t;#o=new Map;constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const t=this.getAttribute("state");this.#t=s.states.includes(t)?t:"stop",this.shadowRoot.appendChild(i.content.cloneNode(!0));const n=this.shadowRoot.querySelectorAll("div");s.states.forEach((c,l)=>{this.#o.set(c,n[l])}),this.addEventListener("click",()=>this.next()),this.#e(!0)}get state(){return this.#t}next(){this.#e(!1);const t=this.#t;this.#t=t==="stop"?"yield":t==="yield"?"go":"stop",this.#e(!0),this.dispatchEvent(new CustomEvent("state-change",{detail:{state:this.#t},bubbles:!0,composed:!0}))}#e(t){this.#o.get(this.#t).classList.toggle("on",t)}}customElements.define("traffic-light",s);const{expect:e}=__STORYBOOK_MODULE_TEST__,{events:d,args:f,argTypes:g,template:u}=p("traffic-light"),L={title:"Components/TrafficLight",component:"traffic-light",args:f,argTypes:g,render:o=>u(o),parameters:{actions:{handles:d}},tags:["autodocs"]},a={play:({canvasElement:o})=>{const t=o.querySelector("traffic-light");e(t).toBeInTheDocument(),t.next(),e(t).toHaveProperty("state","yield"),t.shadowRoot?.querySelector("button")?.click(),e(t).toHaveProperty("state","go"),t.next(),e(t).toHaveProperty("state","stop")}},m=o=>{const t=document.createElement("traffic-light");for(const[n,c]of Object.entries(o))t.setAttribute(n,c);return t},r={args:{state:"go"},render:m,play:async({canvasElement:o})=>{const t=o.querySelector("traffic-light");e(t).toBeInTheDocument(),e(t).toHaveProperty("state","go"),t.click(),e(t).toHaveProperty("state","stop"),t.click(),e(t).toHaveProperty("state","yield"),t.click(),e(t).toHaveProperty("state","go")}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: ({
    canvasElement
  }) => {
    const trafficLight = canvasElement.querySelector("traffic-light") as TrafficLight;
    expect(trafficLight).toBeInTheDocument();

    // There are two ways to advance to the next state,
    // calling the next method or clicking the button.

    trafficLight.next();
    expect(trafficLight).toHaveProperty("state", "yield");
    trafficLight.shadowRoot?.querySelector("button")?.click();
    expect(trafficLight).toHaveProperty("state", "go");
    trafficLight.next();
    expect(trafficLight).toHaveProperty("state", "stop");
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    state: "go"
  },
  // The default render function assumes that the component being tested
  // has a settable property that corresponds to each args entry.
  // The traffic-light component does not have a settable "state" property,
  // so we must use a custom render function.
  render,
  play: async ({
    canvasElement
  }) => {
    const trafficLight = canvasElement.querySelector("traffic-light") as HTMLElement;
    expect(trafficLight).toBeInTheDocument();
    expect(trafficLight).toHaveProperty("state", "go");
    trafficLight.click();
    expect(trafficLight).toHaveProperty("state", "stop");
    trafficLight.click();
    expect(trafficLight).toHaveProperty("state", "yield");
    trafficLight.click();
    expect(trafficLight).toHaveProperty("state", "go");
  }
}`,...r.parameters?.docs?.source}}};const x=["Default","Specified"];export{a as Default,r as Specified,x as __namedExportsOrder,L as default};

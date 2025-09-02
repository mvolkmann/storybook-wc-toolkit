import{g as p}from"./iframe-CZ55b5oo.js";const d=String.raw,l=document.createElement("template");l.innerHTML=d`
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
`;const o=class o extends HTMLElement{constructor(){super(),this._state="stop",this.stateToDivMap=new Map,this.attachShadow({mode:"open"})}connectedCallback(){const t=this.getAttribute("state")??"";this._state=o.states.includes(t)?t:"stop",this.shadowRoot?.appendChild(l.content.cloneNode(!0));const n=this.shadowRoot?.querySelectorAll("div")??[];o.states.forEach((c,h)=>{this.stateToDivMap.set(c,n[h])}),this.addEventListener("click",()=>this.next()),this.change(!0)}get state(){return this._state}next(){this.change(!1);const t=this.state;this._state=t==="stop"?"yield":t==="yield"?"go":"stop",this.change(!0),this.dispatchEvent(new CustomEvent("state-change",{detail:{state:this.state},bubbles:!0,composed:!0}))}change(t){this.stateToDivMap.get(this.state).classList.toggle("on",t)}};o.states=["stop","yield","go"];let i=o;customElements.define("traffic-light",i);const{expect:e}=__STORYBOOK_MODULE_TEST__,{events:f,args:g,argTypes:u,template:m}=p("traffic-light"),b={title:"Components/TrafficLight",component:"traffic-light",args:g,argTypes:u,render:a=>m(a),parameters:{actions:{handles:f}},tags:["autodocs"]},s={play:({canvasElement:a})=>{const t=a.querySelector("traffic-light");e(t).toBeInTheDocument(),t.next(),e(t).toHaveProperty("state","yield"),t.shadowRoot?.querySelector("button")?.click(),e(t).toHaveProperty("state","go"),t.next(),e(t).toHaveProperty("state","stop")}},y=a=>{const t=document.createElement("traffic-light");for(const[n,c]of Object.entries(a))t.setAttribute(n,c);return t},r={args:{state:"go"},render:y,play:async({canvasElement:a})=>{const t=a.querySelector("traffic-light");e(t).toBeInTheDocument(),e(t).toHaveProperty("state","go"),t.click(),e(t).toHaveProperty("state","stop"),t.click(),e(t).toHaveProperty("state","yield"),t.click(),e(t).toHaveProperty("state","go")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const L=["Default","Specified"];export{s as Default,r as Specified,L as __namedExportsOrder,b as default};

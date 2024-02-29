const example3TemplateB = document.createElement('template');
example3TemplateB.innerHTML = `
<h3>Example 3 ComponentB</h1>
`;

class Example3ComponentB extends HTMLElement {
  static TAG = 'example-3-component-b';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(example3TemplateB.content.cloneNode(true));
  }

  hello() {
    console.log('Hello');
  }
}

customElements.define(Example3ComponentB.TAG, Example3ComponentB);

const example3TemplateA = document.createElement('template');
example3TemplateA.innerHTML = `
<div>
<${Example3ComponentB.TAG}></${Example3ComponentB.TAG}>
</div>
`;

export class Example3ComponentA extends HTMLElement {
  static TAG = 'example-3-component-a';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(example3TemplateA.content.cloneNode(true));
    this.componentB = this.shadowRoot.querySelector(Example3ComponentB.TAG);
    console.log('[EXAMPLE-3]TAG NAME:', this.componentB.tagName);
    console.log(
      '[EXAMPLE-3]Is this.componentB is instanceof Example3ComponentB',
      this.componentB instanceof Example3ComponentB
    );
  }

  connectedCallback() {
    this.componentB.hello();
  }
}

customElements.define(Example3ComponentA.TAG, Example3ComponentA);

const example2TemplateB = `
<h3>Example 2 ComponentB</h3>
`;

class Example2ComponentB extends HTMLElement {
  static TAG = 'example-2-component-b';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = example2TemplateB;
  }

  hello() {
    console.log('Hello');
  }
}

customElements.define(Example2ComponentB.TAG, Example2ComponentB);

const example2templateA = `
<div>
<${Example2ComponentB.TAG}></${Example2ComponentB.TAG}>
</div>
`;

export class Example2ComponentA extends HTMLElement {
  static TAG = 'example-2-component-a';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = example2templateA;
    this.componentB = this.shadowRoot.querySelector(Example2ComponentB.TAG);
    console.log('[EXAMPLE-2]TAG NAME:', this.componentB.tagName);
    console.log(
      '[EXAMPLE-2]Is this.componentB is instanceof Example2ComponentB',
      this.componentB instanceof Example2ComponentB
    );
    this.componentB.hello();
  }
}

customElements.define(Example2ComponentA.TAG, Example2ComponentA);

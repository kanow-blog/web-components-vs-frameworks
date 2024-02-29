const example4TemplateB = document.createElement('template');
example4TemplateB.innerHTML = `
<h3>Example 4 ComponentB</h1>
`;

class Example4ComponentB extends HTMLElement {
  static TAG = 'example-4-component-b';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(example4TemplateB.content.cloneNode(true));
  }

  hello() {
    console.log('Hello');
  }
}

customElements.define(Example4ComponentB.TAG, Example4ComponentB);

const example4TemplateA = document.createElement('template');
example4TemplateA.innerHTML = `
<div>
<${Example4ComponentB.TAG}></${Example4ComponentB.TAG}>
</div>
`;

export class Example4ComponentA extends HTMLElement {
  static TAG = 'example-4-component-a';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(example4TemplateA.content.cloneNode(true));
    this.componentB = this.shadowRoot.querySelector(Example4ComponentB.TAG);
    console.log('[EXAMPLE-4]TAG NAME:', this.componentB.tagName);
    console.log(
      '[EXAMPLE-4]Is this.componentB is instanceof Example4ComponentB',
      this.componentB instanceof Example4ComponentB
    );
    this.componentB.hello();
  }
}

customElements.define(Example4ComponentA.TAG, Example4ComponentA);

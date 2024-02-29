const example1TemplateB = document.createElement('template');
example1TemplateB.innerHTML = `
<h3>Example 1 ComponentB</h3>
`;

class Example1ComponentB extends HTMLElement {
  static TAG = 'example-1-component-b';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(example1TemplateB.content.cloneNode(true));
  }

  hello() {
    console.log('Hello');
  }
}

customElements.define(Example1ComponentB.TAG, Example1ComponentB);

const example1TemplateA = document.createElement('template');
example1TemplateA.innerHTML = `
<div>
<${Example1ComponentB.TAG}></${Example1ComponentB.TAG}>
</div>
`;

export class Example1ComponentA extends HTMLElement {
  static TAG = 'example-1-component-a';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(example1TemplateA.content.cloneNode(true));
    this.componentB = this.shadowRoot.querySelector(Example1ComponentB.TAG);
    console.log('[EXAMPLE-1]TAG NAME:', this.componentB.tagName);
    console.log(
      '[EXAMPLE-1]Is this.componentB is instanceof Example1ComponentB',
      this.componentB instanceof Example1ComponentB
    );
    this.componentB.hello();
  }
}

customElements.define(Example1ComponentA.TAG, Example1ComponentA);

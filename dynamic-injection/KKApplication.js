const template = `
<section>
  <h3>Injected application</h3>
  <button id="btn-1">Internal API</button>
  <button id="btn-2">Call passed function</button>
  <button id="btn-3">Close</button>
</section>
`;

export class KKApplication extends HTMLElement {
  static TAG = 'kk-application';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;
    this.setElementsReferences();
    this.externalFunction = null;
    this.onAppClose = null;
  }

  connectedCallback() {
    this.setEventListeners();
  }

  setElementsReferences() {
    this.btn1 = this.shadowRoot.querySelector('#btn-1');
    this.btn2 = this.shadowRoot.querySelector('#btn-2');
    this.btn3 = this.shadowRoot.querySelector('#btn-3');
  }

  setEventListeners() {
    this.btn1.addEventListener('click', () => {
      alert('Called an internal method');
    });
  }

  setExternalCallback(callback) {
    if (this.externalFunction !== null) {
      this.btn2.removeEventListener('click', this.externalFunction);
    }
    this.externalFunction = callback;
    this.btn2.addEventListener('click', callback);
  }

  setOnAppCloseCallback(callback) {
    if (this.onAppClose !== null) {
      this.btn3.removeEventListener('click', this.onAppClose);
    }
    this.onAppClose = callback;
    this.btn3.addEventListener('click', callback);
  }
}

customElements.define(KKApplication.TAG, KKApplication);

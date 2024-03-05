import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SubApp } from '@/app-service/SubApp';

const template = `
<style>
  :host {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
`

export class SubAppWrapper extends HTMLElement {
  static TAG = 'kk-sub-app-wrapper';

  constructor(container, onAppClose) {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;
    this.subAppContainer = container;
    this.onAppClose = onAppClose;
  }

  connectedCallback() {
    const subApp = this.createSubApp();
    ReactDOM.render(subApp, this.shadowRoot);
  }

  mount() {
    this.subAppContainer.append(this);
  }

  unmount() {
    this.remove();
  }

  createSubApp() {
    return React.createElement(SubApp, { onAppClose: this.onAppClose });
  }
}

customElements.define(SubAppWrapper.TAG, SubAppWrapper);

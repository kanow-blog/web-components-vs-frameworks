import { NewEventInput } from './NewEventInput.js';
import { EventsList } from './EventsList.js';

const template = `
<style>
:host {
  height: 100%;
}
#container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
kk-events-list::part(list-title) {
  border-bottom: var(--color-accent-1) solid 0.25rem;
}
</style>
<main id="container">
  <${NewEventInput.TAG} kk-placeholder="Event value ..." kk-label="Add new event:" ></${NewEventInput.TAG}>
  <${EventsList.TAG}></${EventsList.TAG}>
</main>
`;

export class App extends HTMLElement {
  static TAG = 'kk-app';

  _newEventInput;
  _eventsList;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;
    this.getElementReferences();
    this.initializeListeners();
  }

  getElementReferences() {
    this._newEventInput = this.shadowRoot.querySelector(NewEventInput.TAG);
    this._eventsList = this.shadowRoot.querySelector(EventsList.TAG);
  }

  initializeListeners() {
    this._newEventInput.addEventListener('add-event', ({ detail }) => this._eventsList.addEvent(detail.eventValue));
  }
}

customElements.define(App.TAG, App);

const template = `
<style>
  :host {
    display: block;
    width: 100%;
  }
  h2 {
  text-align: center;
  }
  .events-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 70%;
    overflow-y: auto;
  }
</style>
<h2>Events list:</h2>
<ul class="events-list"></ul>
`;

export class EventsList extends HTMLElement {
  static TAG = 'kk-events-list';

  eventsWrapper;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;
    this.getElementReferences();
  }

  getElementReferences() {
    this.eventsWrapper = this.shadowRoot.querySelector('ul');
  }

  addEvent(eventContent) {
    const eventWrapper = document.createElement('li');
    eventWrapper.textContent = eventContent;
    this.eventsWrapper.append(eventWrapper);
  }
}

customElements.define(EventsList.TAG, EventsList);

import {createElement} from '../render';

function createListEmptyViewTemplate() {
  return ('<p class="trip-events__msg">Click New Event to create your first point</p>');
}

export default class ListEmptyView {
  #element = null;

  get template() {
    return createListEmptyViewTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}

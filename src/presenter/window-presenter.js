import TripItemView from '../view/trip-item-view.js';
import {render} from '../render';
import EditPointView from '../view/edit-point-view';
import ListEmptyView from '../view/list-empty-view';

export default class WindowPresenter {

  #tripContainer = null;
  #pointModel = null;
  #points = null;
  #listEmptyView = new ListEmptyView();

  #type = null;
  #city = null;
  #dataFrom = null;
  #dateTo = null;

  constructor({tripContainer, pointModel}) {
    this.#tripContainer = tripContainer;
    this.#pointModel = pointModel;
  }

  init() {
    this.#points = [...this.#pointModel.points];
    this.#type = 'taxi';
    this.#city = 'New - York';
    this.#dataFrom = '19/03/19 00:00';
    this.#dateTo = '19/03/19 20:30';

    this.contentRender();

    const buttonNewEvent = document.querySelector('.trip-main__event-add-btn');
    buttonNewEvent.addEventListener('click', () => {
      const tripItemView = new TripItemView(this.#points);
      this.#tripContainer.replaceChild(tripItemView.element, this.#listEmptyView.element);
      buttonNewEvent.disabled = true;

      const tripEvents = document.querySelector('ul');
      for (const tripEvent of tripEvents.children) {
        const btn = tripEvent.querySelector('.event__rollup-btn');
        btn.addEventListener('click', () => {
          this.changeElement(tripEvent, tripEvents);
        });
      }
    });
  }

  contentRender() {
    render(this.#listEmptyView, this.#tripContainer);
  }

  changeElement(tripEvent, tripEvents) {
    const editPointView = new EditPointView(this.#type, this.#city, this.#dataFrom, this.#dateTo, this.#pointModel.offers, this.#pointModel.destinations);
    const replaceChild = tripEvents.replaceChild(editPointView.element, tripEvent);
    const closeButtons = editPointView.element.querySelector('.event__rollup-btn');

    closeButtons.addEventListener('click', () => {
      changesToWaypoints();
      document.removeEventListener('keydown', escKeyDownHandler);
    });

    document.addEventListener('keydown', escKeyDownHandler);

    function changesToWaypoints() {
      tripEvents.replaceChild(replaceChild, editPointView.element);
    }

    function escKeyDownHandler(evt) {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        changesToWaypoints();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    }
  }
}

import {createElement} from '../render';
import {convertsDate} from '../mock/util';

const mapToOffersList = (offers) => offers
  .map((offer) =>
    `<li class="event__offer">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </li>`)
  .join('') || '';

const mapToContent = (points) => points
  .map((point) => {
    const startDate = new Date(point.date_from);
    const endDate = new Date(point.date_to);
    const formattedDate = convertsDate((startDate));

    return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="2019-03-18">${formattedDate} ${startDate.getUTCDate()}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${point.type}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${point.type} ${point.destination?.name}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${point.date_from}">${startDate.getUTCHours()}:${startDate.getUTCMinutes()}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${point.date_to}">${endDate.getUTCHours()}:${endDate.getUTCMinutes()}</time>
                  </p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${point.base_price}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  ${mapToOffersList(point.offers)}
                </ul>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;
  })
  .join('');

const createTripItemTemplate = (points) => `<ul>${mapToContent(points)}</ul>`;

export default class TripItemView {
  constructor(points) {
    this.points = points;
  }

  getTemplate() {
    return createTripItemTemplate(this.points);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

import {createElement} from '../render';

const mapToDestinationCitiesList = (destinations) => destinations
  .map((destination) => `<option value="${destination.name}"></option>`)
  .join('');

const mapToOffersList = (offers) => offers.map((offer) =>
  `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}" type="checkbox" name="event-offer">
      <label class="event__offer-label" for="event-offer-meal-1">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>`)
  .join('');

const changeFirstLetter = (name) => name[0].toUpperCase() + name.slice(1);

const mapEventTypeList = (offers) => offers
  .map((offer, index) =>
    `<div class="event__type-item">
        <input id="event-type-${offer.type}-${index}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${offer.type}">
        <label class="event__type-label  event__type-label--${offer.type}" for="event-type-${offer.type}-${index}">${changeFirstLetter(offer.type)}</label>
     </div>`)
  .join('');

const createEditPointView = (type, city, dateFrom, dateTo, offers, destinations) => {

  const offersOfType = offers.find((o) => o.type === type).offers;
  const destination = destinations.find((d) => d.name === city);


  return (`<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event ${type} icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${mapEventTypeList(offers)}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${type}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      ${mapToDestinationCitiesList(destinations)}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateFrom}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateFrom}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                    <div class="event__available-offers">
                     ${mapToOffersList(offersOfType)}
                    </div>
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${city} ${destination.description}</p>
                  </section>
                </section>
              </form>
            </li>`
  );
};

export default class EditPointView {
  #type = null;
  #city = null;
  #dataFrom = null;
  #dataTo = null;
  #offers = null;
  #destinations = null;
  #element = null;

  constructor(type, city, dataFrom, dateTo, offers, destinations) {
    this.#type = type;
    this.#city = city;
    this.#dataFrom = dataFrom;
    this.#dataTo = dateTo;
    this.#offers = offers;
    this.#destinations = destinations;

  }

  get template() {
    return createEditPointView(this.#type, this.#city, this.#dataFrom, this.#dataTo, this.#offers, this.#destinations);
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

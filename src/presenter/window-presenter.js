import SearchFormView from '../view/search-form-view.js';
import TripItemView from '../view/trip-item-view.js';
import {render} from '../render';

export default class WindowPresenter {

  constructor({tripContainer}) {
    this.tripContainer = tripContainer;
  }

  init() {
    render(new SearchFormView(), this.tripContainer);

    for (let i = 0; i < 3; i++) {
      render(new TripItemView(), this.tripContainer);
    }
  }
}

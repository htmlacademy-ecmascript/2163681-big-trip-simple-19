import SearchFormView from '../view/search-form-view.js';
import TripItemView from '../view/trip-item-view.js';
import {render} from '../render';

export default class WindowPresenter {

  constructor({tripContainer, pointModel}) {
    this.tripContainer = tripContainer;
    this.pointModel = pointModel;
  }

  init() {
    this.points = [...this.pointModel.getPoints()];
    const type = 'taxi';
    const city = 'New - York';
    const dataFrom = '19/03/19 00:00';
    const dateTo = '19/03/19 20:30';

    this.filterRender(type, city, dataFrom, dateTo);

    this.contentRender();
  }

  contentRender() {
    render(new TripItemView(this.points), this.tripContainer);
  }

  filterRender(type, city, dataFrom, dateTo) {
    render(new SearchFormView(type, city, dataFrom, dateTo, this.pointModel.getOffers(), this.pointModel.getDestinations()), this.tripContainer);
  }
}

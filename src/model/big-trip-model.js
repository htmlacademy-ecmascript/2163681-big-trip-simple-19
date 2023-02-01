import {getRandomPointsList, getOffersList, getDestinationsList} from '../mock/task';

const POINTS_COUNT = 15;

export default class BigTripModel {
  #points = Array.from({length: POINTS_COUNT}, getRandomPointsList);

  get points(){
    return this.#points;
  }

  get offers() {
    return getOffersList();
  }

  get destinations() {
    return getDestinationsList();
  }

}


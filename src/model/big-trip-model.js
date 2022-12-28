import {getRandomPointsList, getOffersList, getDestinationsList} from '../mock/task';

const POINTS_COUNT = 15;

export default class BigTripModel {
  points = Array.from({length: POINTS_COUNT}, getRandomPointsList);

  getPoints(){
    return this.points;
  }

  getOffers() {
    return getOffersList();
  }

  getDestinations() {
    return getDestinationsList();
  }

}


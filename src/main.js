import FilterView from './view/filters-view.js';
import SortingView from './view/sorting-view.js';
import WindowPresenter from './presenter/window-presenter.js';
import BigTripModel from './model/big-trip-model.js';
import {render} from './render.js';

const siteHeaderElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.trip-events');

const pointModel = new BigTripModel();
const windowPresent = new WindowPresenter({
  tripContainer: siteMainElement,
  pointModel,
});

render(new FilterView(), siteHeaderElement);
render(new SortingView(), siteMainElement);

windowPresent.init();

import {getRandomArrayElement, getRandomNumber, getSentence} from './util.js';

const SENTENCES = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.'
];

const DESTINATIONS = [
  {
    id: 1,
    description: getSentence(SENTENCES, 5),
    name: 'Chamonix',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      }
    ]
  },
  {
    id: 2,
    description: getSentence(SENTENCES, 5),
    name: 'Geneva',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      }
    ]
  },
  {
    id: 3,
    description: getSentence(SENTENCES, 5),
    name: 'London',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      }
    ]
  },
  {
    id: 4,
    description: getSentence(SENTENCES, 5),
    name: 'Paris',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      }
    ]
  },
  {
    id: 5,
    description: getSentence(SENTENCES, 5),
    name: 'New - York',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      }
    ]
  },
  {
    id: 6,
    description: getSentence(SENTENCES, 5),
    name: 'Vena',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      }
    ]
  },
  {
    id: 7,
    description: getSentence(SENTENCES, 5),
    name: 'Madrid',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      }
    ]
  },
  {
    id: 8,
    description: getSentence(SENTENCES, 5),
    name: 'Rome',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      }
    ]
  },
  {
    id: 9,
    description: getSentence(SENTENCES, 5),
    name: 'Venice',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      }
    ]
  },
  {
    id: 10,
    description: getSentence(SENTENCES, 5),
    name: 'Berne',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomNumber(1, 100)}`,
        description: `${getSentence(SENTENCES, 1)}`,
      }
    ]
  }
];

const OFFERS = [
  {
    type: 'taxi',
    offers: [
      {
        id: 1,
        title: 'Upgrade to a business class',
        price: 190
      },
      {
        id: 2,
        title: 'Choose the radio station',
        price: 30
      },
      {
        id: 3,
        title: 'Choose temperature',
        price: 170
      },
      {
        id: 4,
        title: 'Drive quickly, I am in a hurry',
      },
      {
        id: 5,
        title: 'Drive slowly',
        price: 110
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: 1,
        title: 'Infotainment system',
        price: 50
      },
      {
        id: 2,
        title: 'Order meal',
        price: 100
      },
      {
        id: 3,
        title: 'Choose seats',
        price: 190
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: 1,
        title: 'Book a taxi at the arrival point',
        price: 110
      },
      {
        id: 2,
        title: 'Order a breakfast',
        price: 80
      },
      {
        id: 3,
        title: 'Wake up at a certain time',
        price: 140
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 1,
        title: 'Choose meal',
        price: 120
      },
      {
        id: 2,
        title: 'Choose seats',
        price: 90
      },
      {
        id: 3,
        title: 'Upgrade to comfort class',
        price: 120
      },
      {
        id: 4,
        title: 'Upgrade to business class',
        price: 120
      },
      {
        id: 5,
        title: 'Add luggage',
        price: 170
      },
      {
        id: 6,
        title: 'Business lounge',
        price: 160
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 1,
        title: 'Choose the time of check-in',
        price: 70
      },
      {
        id: 2,
        title: 'Choose the time of check-out',
        price: 190
      },
      {
        id: 3,
        title: 'Add breakfast',
        price: 110
      },
      {
        id: 4,
        title: 'Laundry',
        price: 140
      },
      {
        id: 5,
        title: 'Order a meal from the restaurant',
        price: 30
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: []
  },
  {
    type: 'ship',
    offers: [
      {
        id: 1,
        title: 'Choose meal',
        price: 130
      },
      {
        id: 2,
        title: 'Choose seats',
        price: 160
      },
      {
        id: 3,
        title: 'Upgrade to comfort class',
        price: 170
      },
      {
        id: 4,
        title: 'Upgrade to business class',
        price: 150
      },
      {
        id: 5,
        title: 'Add luggage',
        price: 100
      },
      {
        id: 6,
        title: 'Business lounge',
        price: 40
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: 1,
        title: 'With automatic transmission',
        price: 110
      },
      {
        id: 2,
        title: 'With air conditioning',
        price: 180
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 1,
        title: 'Choose live music',
        price: 150
      },
      {
        id: 2,
        title: 'Choose VIP area',
        price: 70
      }
    ]
  }
];

const POINTS = [
  {
    id: 0,
    type: 'restaurant',
    'date_from': '2022-11-17T11:01:47.410Z',
    'date_to': '2022-11-17T18:24:17.441Z',
    destination: 5,
    'base_price': 800,
    offers: [
      1,
      2
    ]
  },
  {
    id: 1,
    type: 'ship',
    'date_from': '2022-12-17T18:24:17.441Z',
    'date_to': '2022-12-18T13:29:18.584Z',
    destination: 2,
    'base_price': 900,
    offers: [
      3,
      4
    ]
  },
  {
    id: 2,
    type: 'taxi',
    'date_from': '2022-10-18T13:29:18.584Z',
    'date_to': '2022-10-18T19:32:54.172Z',
    destination: 4,
    'base_price': 1100,
    offers: [
      2,
      3,
      4
    ]
  },
  {
    id: 3,
    type: 'restaurant',
    'date_from': '2022-10-18T19:32:54.172Z',
    'date_to': '2022-10-19T16:10:30.437Z',
    destination: 9,
    'base_price': 400,
    offers: [
      1,
      2
    ]
  },
  {
    id: 4,
    type: 'flight',
    'date_from': '2022-09-19T16:10:30.437Z',
    'date_to': '2022-09-20T09:43:46.489Z',
    destination: 1,
    'base_price': 300,
    offers: [
      1,
      4
    ]
  },
  {
    id: 5,
    type: 'restaurant',
    'date_from': '2022-12-20T09:43:46.489Z',
    'date_to': '2022-12-20T21:28:51.209Z',
    destination: 8,
    'base_price': 400,
    offers: [
      1,
      2
    ]
  },
  {
    id: 6,
    type: 'sightseeing',
    'date_from': '2022-12-20T21:28:51.209Z',
    'date_to': '2022-12-21T03:19:38.874Z',
    destination: 3,
    'base_price': 400,
    offers: []
  },
  {
    id: 7,
    type: 'flight',
    'date_from': '2022-12-21T03:19:38.874Z',
    'date_to': '2022-12-21T09:01:19.059Z',
    destination: 10,
    'base_price': 500,
    offers: [
      4
    ]
  },
  {
    id: 8,
    type: 'taxi',
    'date_from': '2022-12-21T09:01:19.059Z',
    'date_to': '2022-12-22T06:31:19.193Z',
    destination: 6,
    'base_price': 800,
    offers: [
      1,
      4,
      5
    ]
  },
  {
    id: 9,
    type: 'taxi',
    'date_from': '2022-12-22T06:31:19.193Z',
    'date_to': '2022-12-22T14:47:49.747Z',
    destination: 7,
    'base_price': 900,
    offers: [
      2,
      3,
      4
    ]
  },
  {
    id: 10,
    type: 'train',
    'date_from': '2022-12-22T14:47:49.747Z',
    'date_to': '2022-12-23T12:28:03.960Z',
    destination: 5,
    'base_price': 1000,
    offers: [
      1,
      2,
      3
    ]
  }
];

const combineAllPoints = () => POINTS.map((point) => ({
  id: point.id,
  type: point.type,
  'date_from': point.date_from,
  'date_to': point.date_to,
  destination: DESTINATIONS.find((destination) => destination.id === point.destination) || {},
  'base_price': point.base_price,
  offers: OFFERS.find((o) => o.type === point.type)?.offers.filter((o) => point.offers.includes(o.id)) || []
}));

const getRandomPointsList = () => getRandomArrayElement(combineAllPoints());

const getDestinationsList = () => DESTINATIONS;

const getOffersList = () => OFFERS;

export {getDestinationsList, getOffersList, combineAllPoints, getRandomPointsList};

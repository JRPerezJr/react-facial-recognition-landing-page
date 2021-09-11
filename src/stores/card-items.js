import Chrome from '../assets/logo-chrome.svg';
import Firefox from '../assets/logo-firefox.svg';
import Opera from '../assets/logo-opera.svg';

export const cardItems = [
  {
    id: 1,
    cardClass: 'flex flex-col rounded-md shadow-md lg:mb-16',
    img: Chrome,
    header: 'Add to Chrome',
    paragraph: 'Minimum version 62',
    twClass:
      ' flex-1 btn btn-purple text-primary hover:bg-primary hover:text-secondary',
    text: 'Add & Install Extension',
  },
  {
    id: 2,
    cardClass: 'flex flex-col rounded-md shadow-md lg:my-8',
    img: Firefox,
    header: 'Add to Firefox',
    paragraph: 'Minimum version 62',
    twClass:
      ' flex-1 btn btn-purple text-primary hover:bg-primary hover:text-secondary',
    text: 'Add & Install Extension',
  },
  {
    id: 3,
    cardClass: 'flex flex-col rounded-md shadow-md lg:mt-16',
    img: Opera,
    header: 'Add to Opera',
    paragraph: 'Minimum version 62',
    twClass:
      ' flex-1 btn btn-purple text-primary hover:bg-primary hover:text-secondary',
    text: 'Add & Install Extension',
  },
];

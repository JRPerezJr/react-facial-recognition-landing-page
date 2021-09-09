import Feature1 from '../assets/illustration-features-tab-1.png';
import Feature2 from '../assets/illustration-features-tab-2.png';
import Feature3 from '../assets/illustration-features-tab-3.png';

export const featureItems = [
  {
    id: 1,
    styledFeatureClass: 'relative mt-20 lg:mt-24',
    styledFeatureContainerClass:
      'container flex flex-col lg:flex-row items-center justify-center gap-x-24',
    featureImage: Feature1,
    contentHeading: 'Match a face with one click',
    contentParagraph:
      'Search images however you like. Our simple drag-and-drop interface\n' +
      '            gives you complete control over how you manage your favorite images.',
    roundedRectangleClass:
      'hidden lg:block overflow-hidden bg-light-blue rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36',
  },
  {
    id: 2,
    styledFeatureClass: 'relative mt-20 lg:mt-24',
    styledFeatureContainerClass:
      'container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24',
    featureImage: Feature2,
    contentHeading: 'Intelligent image search',
    contentParagraph:
      'Our powerful facial search will help you find a face in no time at all. No need to crawl through images.',
    roundedRectangleClass:
      'hidden lg:block overflow-hidden bg-light-blue rounded-l-full absolute h-80 w-2/4 -bottom-24 -right-36',
  },
  {
    id: 3,
    styledFeatureClass: 'relative mt-20 lg:mt-52',
    styledFeatureContainerClass:
      'container flex flex-col lg:flex-row items-center justify-center gap-x-24',
    featureImage: Feature3,
    contentHeading: 'Share your images',
    contentParagraph:
      'Easily share your images with others. Create a sharable link that you can send at a click of a button.',
    roundedRectangleClass:
      'hidden lg:block overflow-hidden bg-light-blue rounded-r-full absolute h-80 w-2/4 -bottom-24 -left-36',
  },
];

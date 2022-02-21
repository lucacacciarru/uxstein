import { imgLibrary } from '../imgLibrary';
import { MotionChakraBox, AdormentList } from './types';

const adormentStyle: MotionChakraBox[] = [
  {
    top: '-15%',
    left: '0%',
    w: '13vw',
    h: '15vh',
    animate: {
      rotate: -15,
      transition: {
        repeat: Infinity,
        duration: 1,
        repeatType: 'reverse',
      },
    },
  },
  {
    top: '-20%',
    right: '-5%',
    w: '13vw',
    h: '25vh',
    animate: {
      rotate: 5,
      transition: {
        repeat: Infinity,
        duration: 1,
        repeatType: 'reverse',
      },
    },
  },
  {
    bottom: '-5%',
    right: '5%',
    w: '10vw',
    h: '20vh',
    animate: {
      rotate: -10,
      transition: {
        repeat: Infinity,
        duration: 1,
        repeatType: 'reverse',
      },
    },
  },
  {
    bottom: '0%',
    left: '0%',
    w: '10vw',
    h: '20vh',
    animate: {
      rotate: 20,
      transition: {
        repeat: Infinity,
        duration: 1,
        repeatType: 'reverse',
      },
    },
  },
];

export const adormentList: AdormentList[] = [
  {
    imageProp: {
      src: imgLibrary.firstInput,
    },
    tooltipsProp: {
      placement: 'right',
      label:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut culpa recusandae officiis repudiandae quaerat omnis earum tenetur odit enim minima.',
    },
    boxProp: {
      ...adormentStyle[0],
    },
  },
  {
    imageProp: {
      src: imgLibrary.secondInput,
    },
    tooltipsProp: {
      placement: 'left',
      label:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut culpa recusandae officiis repudiandae quaerat omnis earum tenetur odit enim minima.',
    },
    boxProp: {
      ...adormentStyle[1],
    },
  },
  {
    imageProp: {
      src: imgLibrary.thirdInput,
    },
    tooltipsProp: {
      placement: 'left',
      label:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut culpa recusandae officiis repudiandae quaerat omnis earum tenetur odit enim minima.',
    },
    boxProp: {
      ...adormentStyle[2],
    },
  },
  {
    imageProp: {
      src: imgLibrary.fourthInput,
    },
    tooltipsProp: {
      placement: 'right',
      label:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut culpa recusandae officiis repudiandae quaerat omnis earum tenetur odit enim minima.',
    },
    boxProp: {
      ...adormentStyle[3],
    },
  },
];

import {
  AmazonIcon,
  CSSIcon,
  ExpressIcon,
  FigmaIcon,
  FirebaseIcon,
  HTMLIcon,
  JavascriptIcon,
  MongoDBIcon,
  MongooseIcon,
  NextIcon,
  NodeJsIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TailwindCssIcon,
  TypescriptIcon,
  VueJsIcon,
  WebpackIcon,
} from '@/components/icons'

export const TECHNICALS = [
  {
    name: 'Javascript',
    icon: <JavascriptIcon width={52} height={52} />,
    bgColor: '#C3C99E',
  },
  {
    name: 'Typescript',
    icon: <TypescriptIcon width={52} height={52} />,
    bgColor: '#7D9CA5',
  },
  {
    name: 'React',
    icon: <ReactIcon width={52} height={52} />,
    bgColor: '#7D9CA5',
  },
  {
    name: 'Next',
    icon: <NextIcon width={52} height={52} />,
    bgColor: '#C2C2C2',
  },
  {
    name: 'NodeJs',
    icon: <NodeJsIcon width={52} height={52} />,
    bgColor: '#14532D',
  },
]

// program langues
export const TECHNICAL_USING = [
  {
    title: 'Languages',
    items: [
      {
        name: 'Javascript',
        icon: <JavascriptIcon />,
      },
      {
        name: 'Typescript',
        icon: <TypescriptIcon />,
      },
      {
        name: 'CSS',
        icon: <CSSIcon />,
      },
      {
        name: 'HTML',
        icon: <HTMLIcon />,
      },
    ],
  },
  {
    title: 'Front-end',
    items: [
      {
        name: 'ReactJS',
        icon: <ReactIcon />,
      },
      {
        name: 'NextJS',
        icon: <NextIcon />,
      },
      {
        name: 'VueJS',
        icon: <VueJsIcon />,
      },
      {
        name: 'Redux',
        icon: <ReduxIcon />,
      },
      {
        name: 'Sass',
        icon: <SassIcon />,
      },
      {
        name: 'TailwindCss',
        icon: <TailwindCssIcon />,
      },
    ],
  },
  {
    title: 'Back-end',
    items: [
      {
        name: 'NodeJS',
        icon: <NodeJsIcon />,
      },
      {
        name: 'ExpressJS',
        icon: <ExpressIcon />,
      },
      {
        name: 'Mongo DB',
        icon: <MongoDBIcon />,
      },
      {
        name: 'Mongoose',
        icon: <MongooseIcon />,
      },
    ],
  },
  {
    title: 'Devops & Tools',
    items: [
      {
        name: 'Firebase',
        icon: <FirebaseIcon />,
      },
      {
        name: 'Webpack',
        icon: <WebpackIcon />,
      },
      {
        name: 'Figma',
        icon: <FigmaIcon />,
      },
      {
        name: 'AWS',
        icon: <AmazonIcon />,
      },
    ],
  },
]

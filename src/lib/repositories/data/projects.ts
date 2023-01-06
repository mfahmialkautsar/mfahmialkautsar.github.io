import {Project} from '@/types/models/Project';

const projects: Project[] = [
  {
    'id': 1,
    'img': 'antares.jpg',
    'title': 'Antares',
    'category': 'Web',
    'desc': 'IoT platform connectivity provider',
    'link': 'https://antares.id',
  },
  {
    'id': 2,
    'img': 'lexplay.jpg',
    'title': 'LexPlay',
    'category': 'iOS, WatchOS',
    'desc': 'Pre-school dyslexic kids app to learn the alphabet by using the multi-sensory approaches',
    'link': 'https://lexplay.vercel.app',
  },
  {
    'id': 3,
    'img': 'sureback.jpg',
    'title': 'SureBack',
    'category': 'iOS',
    'desc': 'iOS application to track and record culinary businesses customers\' Instagram story promotion that has fair and automatic reward distribution after 24 hours',
    'link': 'https://testflight.apple.com/join/o4INPHzX',
  },
];

export default projects;

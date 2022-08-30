import {JSON_API_BASE_URL} from '@/lib/constants/api';

const BASE_DATA_URL = `${JSON_API_BASE_URL}/data`;

const getProjects = () =>
  fetch(`${BASE_DATA_URL}/projects.json`).then((res: Response) => res.json());

const getOpenSourceProjects = () =>
  fetch(`${BASE_DATA_URL}/open-source-projects.json`).then((res: Response) => res.json());

const getDesigns = () =>
  fetch(`${BASE_DATA_URL}/designs.json`).then((res: Response) => res.json());

export {getOpenSourceProjects, getProjects, getDesigns};

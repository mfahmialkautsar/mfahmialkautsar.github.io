import {PROJECT_IMAGE_URL, DESIGN_IMAGE_URL, OPEN_SOURCE_PROJECT_IMAGE_URL} from '@/lib/constants/api';

function getProjectImage(imageName: string): string {
  if (/^http.*/.test(imageName)) return imageName;
  return `${PROJECT_IMAGE_URL}/${imageName}`;
}

function getOpenSourceProjectImage(imageName: string): string {
  if (/^http.*/.test(imageName)) return imageName;
  return `${OPEN_SOURCE_PROJECT_IMAGE_URL}/${imageName}`;
}

function getDesignImage(imageName: string): string {
  if (/^http.*/.test(imageName)) return imageName;
  return `${DESIGN_IMAGE_URL}/${imageName}`;
}

export {getProjectImage, getOpenSourceProjectImage, getDesignImage};

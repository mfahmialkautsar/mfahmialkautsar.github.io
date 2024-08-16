import {
  PROJECT_IMAGE_URL,
  DESIGN_IMAGE_URL,
  OPEN_SOURCE_PROJECT_IMAGE_URL,
} from '../lib/constants/api.js';

/**
 * Get project image
 * @param {string} imageName
 * @return {string}
 */
function getProjectImage(imageName) {
  if (/^http.*/.test(imageName)) return imageName;
  return `${PROJECT_IMAGE_URL}/${imageName}`;
}

/**
 * Get open source project image
 * @param {string} imageName
 * @return {string}
 */
function getOpenSourceProjectImage(imageName) {
  if (/^http.*/.test(imageName)) return imageName;
  return `${OPEN_SOURCE_PROJECT_IMAGE_URL}/${imageName}`;
}

/**
 * Get design image
 * @param {string} imageName
 * @return {string}
 */
function getDesignImage(imageName) {
  if (/^http.*/.test(imageName)) return imageName;
  return `${DESIGN_IMAGE_URL}/${imageName}`;
}

export { getProjectImage, getOpenSourceProjectImage, getDesignImage };

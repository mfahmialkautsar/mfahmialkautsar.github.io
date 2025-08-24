/**
 * Creation interface
 * @interface Creation
 * @property {number} id
 * @property {string} title
 * @property {string} img
 * @property {string} link
 */
class Creation {
  constructor(id, img, title, link) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.link = link;
  }
}
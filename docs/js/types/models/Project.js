/**
 * Project interface
 * @interface Project
 * @extends Creation
 * @property {string} category
 * @property {string} desc
 */
class Project extends Creation {
  constructor(id, img, title, category, desc, link) {
    super(id, img, title, link);
    this.category = category;
    this.desc = desc;
    this.link = link;
  }
}

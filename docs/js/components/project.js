import {
  projects,
  openSourceProjects,
  designs,
} from '../lib/repositories/data/index.js';
import {
  getDesignImage,
  getProjectImage,
  getOpenSourceProjectImage,
} from '../utils/helper.js';
import spinner from './spinner.js';

function project() {
  /**
   * Create a project item
   * @param {string} id
   * @return {HTMLElement}
   */
  function projectItem(id) {
    const item = document.createElement('div');
    item.classList.add('projects-item');
    item.id = id;
    return item;
  }

  /**
   * Create a project item
   * @param {Project} project
   * @return {HTMLElement}
   */
  function createOpenSourceProjectContainer({
    title,
    img,
    category,
    desc,
    link,
  }) {
    const projects = document.createElement('div');
    projects.classList.add('project');

    projects.innerHTML = `
    <a class="text-decoration-none text--main card" href="${link}" target="_blank">
      <div class="image-container app-image-container">
        <div style="background-image: url('${getOpenSourceProjectImage(
          img
        )}')" class="img"></div>
        <div class="kind text--white">${category}</div>
      </div>
      <div class="project-text">
        <h3 class="title">${title}</h3>
        <p class="desc">${desc}</p>
      </div>
    </a>
    `;
    return projects;
  }

  /**
   * Create a project item
   * @param {Project} project
   * @return {HTMLElement}
   */
  function createProjectContainer({ title, img, category, desc, link }) {
    const projects = document.createElement('div');
    projects.classList.add('project');

    projects.innerHTML = `
    <a class="text-decoration-none text--main card" href="${link}" target="_blank">
      <div class="image-container app-image-container">
        <div style="background-image: url('${getProjectImage(
          img
        )}')" class="img"></div>
        <div class="kind text--white">${category}</div>
      </div>
      <div class="project-text">
        <h3 class="title">${title}</h3>
        <p class="desc">${desc}</p>
      </div>
    </a>
    `;
    return projects;
  }

  /**
   * Create a project item
   * @param {Design} design
   * @return {HTMLElement}
   */
  function createDesignContainer({ title, img, link }) {
    const design = document.createElement('div');
    design.classList.add('project');

    design.innerHTML = `
    <a class="text-decoration-none text--main card" href="${link}" target="_blank">
      <div class="image-container design-image-container">
        <div style="background-image: url('${getDesignImage(
          img
        )}')" class="img"></div>
      </div>
      <div class="project-text">
        <h3 class="title">${title}</h3>
      </div>
    </a>
    `;
    return design;
  }

  async function generateProjectsBlock() {
    const id = 'projects';
    const projectsSection = document.getElementById(id);
    if (projectsSection) {
      projectsSection.innerHTML = spinner();
      const container = projectItem(id);
      projectsSection.replaceWith(container);

      projects
        .slice()
        .reverse()
        .forEach(
          /** @param {Project} proj */
          (proj) => {
            const projectContainer = createProjectContainer(proj);
            container.appendChild(projectContainer);
          }
        );
    }
  }

  async function generateOpenSourceProjectsBlock() {
    const id = 'open-source-projects';
    const openSourceProjectsSection = document.getElementById(id);
    if (openSourceProjectsSection) {
      openSourceProjectsSection.innerHTML = spinner();
      const container = projectItem(id);
      openSourceProjectsSection.replaceWith(container);

      openSourceProjects
        .slice()
        .reverse()
        .forEach(
          /** @param {Project} proj */
          (proj) => {
            const openSourceProjectContainer =
              createOpenSourceProjectContainer(proj);
            container.appendChild(openSourceProjectContainer);
          }
        );
    }
  }

  async function generateDesignsBlock() {
    const id = 'designs';
    const designsSection = document.getElementById(id);

    if (designsSection) {
      designsSection.innerHTML = spinner();
      const container = projectItem(id);
      designsSection.replaceWith(container);

      designs
        .slice()
        .reverse()
        .forEach(
          /** @param {Design} design */
          (design) => {
            const designContainer = createDesignContainer(design);
            container.appendChild(designContainer);
          }
        );
    }
  }

  generateProjectsBlock();
  generateOpenSourceProjectsBlock();
  generateDesignsBlock();
}

export default project;

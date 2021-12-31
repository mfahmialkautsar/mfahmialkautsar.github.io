import {Project} from '@/types/models/Project';
import {Design} from '@/types/models/Design';
import {getDesigns, getProjects} from '../lib/repositories/data';
import {getDesignImage, getProjectImage} from '../utils/helper';
import spinner from './spinner';

function project() {
  function createProjectContainer({
    title,
    img,
    category,
    desc,
    link,
  }: Project) {
    const projects = document.createElement('div');
    projects.classList.add('project');

    projects.innerHTML = `
    <a class="text-decoration-none text--main card" href="${link}" target="_blank">
      <div class="image-container app-image-container">
        <div style="background-image: url('${getProjectImage(
    img,
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

  function createDesignContainer({title, img, link}: Design) {
    const design = document.createElement('div');
    design.classList.add('project');

    design.innerHTML = `
    <a class="text-decoration-none text--main card" href="${link}" target="_blank">
      <div class="image-container design-image-container">
        <div style="background-image: url('${getDesignImage(
    img,
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
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.innerHTML = spinner();
      const projects: [Project] = await getProjects();
      projectsSection.innerHTML = '';

      projects
        .slice()
        .reverse()
        .forEach((proj: Project) => {
          const projectContainer = createProjectContainer(proj);
          projectsSection?.appendChild(projectContainer);
        });
    }
  }

  async function generateDesignsBlock() {
    const designsSection = document.querySelector('#designs');

    if (designsSection) {
      designsSection.innerHTML = spinner();
      const designs: [Design] = await getDesigns();
      designsSection.innerHTML = '';

      designs
        .slice()
        .reverse()
        .forEach((design: Design) => {
          const designContainer = createDesignContainer(design);
          designsSection?.appendChild(designContainer);
        });
    }
  }

  generateProjectsBlock();
  generateDesignsBlock();
}

export default project;

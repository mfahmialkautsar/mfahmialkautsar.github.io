import {Project} from '@/data/Project';
import {Design} from '@/data/Design';
const projects: [Project] = require('@/data/projects.json')['results'];
const designs: [Design] = require('@/data/designs.json')['results'];

function project() {
  function createProjectContainer({title, img, category, desc, link}: Project) {
    const projects = document.createElement('div');
    projects.classList.add('work');

    const p = `
      <a class="text-decoration-none text--main card" href="${link}" target="_blank">
        <div class="image-container app-image-container">
          <div style="background-image: url('${img}')" class="img"></div>
          <div class="kind text--white">${category}</div>
        </div>
        <div class="work-text">
          <h3 class="title">${title}</h3>
          <p class="desc">${desc}</p>
        </div>
      </a>
      `;
    projects.innerHTML = p;
    return projects;
  }

  function createDesignContainer({title, img, link}: Design) {
    const design = document.createElement('div');
    design.classList.add('work');

    const p = `
      <a class="text-decoration-none text--main card" href="${link}" target="_blank">
        <div class="image-container design-image-container">
          <div style="background-image: url('${img}')" class="img"></div>
        </div>
        <div class="work-text">
          <h3 class="title">${title}</h3>
        </div>
      </a>
      `;
    design.innerHTML = p;
    return design;
  }

  const projectsSection = document.querySelector('#projects');
  function generateProjectsBlock() {
    const projs = projects;

    projs
      .slice()
      .reverse()
      .forEach((proj: Project) => {
        const projectContainter = createProjectContainer(proj);
        projectsSection?.appendChild(projectContainter);
      });
  }

  const desginsSection = document.querySelector('#designs');
  function generateDesignsBlock() {
    const ds = designs;

    ds.slice()
      .reverse()
      .forEach((design: Design) => {
        const designContainter = createDesignContainer(design);
        desginsSection?.appendChild(designContainter);
      });
  }

  generateProjectsBlock();
  generateDesignsBlock();
}

export default project;

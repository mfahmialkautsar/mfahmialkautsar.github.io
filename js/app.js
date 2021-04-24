import * as util from './util.js';
import { default as projects } from '/data/projects.js';
import { default as designs } from '/data/designs.js';

function createProjectContainer({ title, img, category, desc, link }) {
	const projects = document.createElement('div');
	projects.classList.add('work');

	const p = `
    <a class="text-no-decor text--main card" href="${link}" target="_blank">
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

function createDesignContainer({ title, img, link }) {
	const design = document.createElement('div');
	design.classList.add('work');

	const p = `
    <a class="text-no-decor text--main card" href="${link}" target="_blank">
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

let projectsSection = document.querySelector('#projects');
function generateProjectsBlock() {
	const projs = projects;

	projs
		.slice()
		.reverse()
		.forEach((proj) => {
			const projectContainter = createProjectContainer(proj);
			projectsSection.appendChild(projectContainter);
		});
}

let desginsSection = document.querySelector('#designs');
function generateDesignsBlock() {
	const ds = designs;

	ds.slice()
		.reverse()
		.forEach((design) => {
			const designContainter = createDesignContainer(design);
			desginsSection.appendChild(designContainter);
		});
}

generateProjectsBlock();
generateDesignsBlock();

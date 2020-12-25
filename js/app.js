import * as util from "./util.js";
import { default as projects } from "/data/projects.js";
import { default as designs } from "/data/designs.js";

function createWorkContainer(projs) {
    const projects = document.createElement("div");
    projects.classList.add("work");

    const p = `
    <a class="no-decor text--main card" href="${projs.link}" target="_blank">
        <div class="image-container">
            <img src="${projs.img}" alt="${projs.title}">
            <div class="kind text--white">${projs.category}</div>
        </div>
        <div id="work-text">
            <h3 class="title">${projs.title}</h3>
            <p class="desc">${projs.desc}</p>
        </div>
    </a>
    `;
    projects.innerHTML = p;
    return projects;
}

function createDesignContainer(ds) {
    const design = document.createElement("div");
    design.classList.add("work");

    const p = `
    <a class="no-decor text--main card" href="${ds.link}" target="_blank">
        <div class="design-image-container">
            <img src="${ds.img}" alt="${ds.title}">
        </div>
        <div id="work-text">
            <h3 class="title">${ds.title}</h3>
        </div>
    </a>
    `;
    design.innerHTML = p;
    return design;
}

let worksSection = document.querySelector("#works");
function generateWorksBlock() {
    const projs = projects;

    for (let i = 0; i < projs.length; i++) {
        const workContainter = createWorkContainer(projs[i]);
        worksSection.appendChild(workContainter);
    }
}

let desginsSection = document.querySelector("#designs");
function generateDesignsBlock() {
    const ds = designs;

    for (let i = 0; i < ds.length; i++) {
        const workContainter = createDesignContainer(ds[i]);
        desginsSection.appendChild(workContainter);
    }
}

generateWorksBlock();
generateDesignsBlock();

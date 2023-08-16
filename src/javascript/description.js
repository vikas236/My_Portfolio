import "../images/html.svg";
import "../images/css.svg";
import "../images/javascript.svg";
import "../images/linux.svg";
import "../images/landing_page.png";
import "../images/etch_a_sketch.png";
import "../images/dashboard.png";
import "../images/calculator.png";
import "../images/form.png";
import "../images/my_library.png";
import "../images/webpack.svg";
import "../images/git.svg";

const skillBox = document.querySelector(".skills_container");
const skills = document.querySelector(".skills");
const projectsBox = document.querySelector(".projects_container");

const skillIcons = [
  "html.svg",
  "css.svg",
  "javascript.svg",
  "webpack.svg",
  "git.svg",
  "linux.svg",
];
const projectIcons = [
  "landing_page.png",
  "etch_a_sketch.png",
  "dashboard.png",
  "calculator.png",
  "form.png",
  "my_library.png",
];
const projectLinks = [
  "Landing_page",
  "Etch-a-Sketch",
  "dashboard_using_grid",
  "Calculator",
  "first_form_page",
  "myLibrary",
];
const projectNames = [
  "Landing Page",
  "Etch a Sketch",
  "Dashboard using Grid",
  "Calculator",
  "Form Page",
  "My Library",
];

const e = (() => {
  // Add skills to the slider
  const addSkills = () => {
    for (let i = 0; i < 6; i += 1) {
      const skill = document.createElement("div");
      skill.classList.add(`skill`);
      const icon = document.createElement("img");
      icon.src = `/dist/images/${skillIcons[i]}`;
      icon.classList.add("skill_icon");
      const label = document.createElement("h3");
      label.textContent = `${skillIcons[i].slice(0, -4)}`;
      skillBox.appendChild(skill);
      skillBox.childNodes[i].appendChild(icon);
      skillBox.childNodes[i].appendChild(label);
    }
  };

  // Add slideing to the skills slider
  const addSlide = () => {
    const left = document.createElement("i");
    const right = document.createElement("i");
    left.className = "bx bxs-chevron-left bx-lg";
    right.className = "bx bxs-chevron-right bx-lg";
    skills.appendChild(left);
    skills.appendChild(right);
  };

  const skillBoxStyles = getComputedStyle(skillBox);

  // Move slider left or right
  const moveSlider = () => {
    const arrowLeft = document.querySelector(".bxs-chevron-left");
    const arrowRight = document.querySelector(".bxs-chevron-right");
    arrowLeft.addEventListener("click", e.slide);
    arrowRight.addEventListener("click", e.slide);
  };

  // Move slider left or right
  const slide = () => {
    let left = parseInt(skillBoxStyles.left, 10);
    if (left > 0) {
      left -= 625;
    } else if (left > -500) {
      left += 625;
    }
    console.log(left);
    skillBox.style.left = `${left}px`;
  };

  // Add projects to the projects container
  const addProjects = () => {
    for (let i = 0; i < 6; i += 1) {
      const project = document.createElement("div");
      const image = document.createElement("img");
      const anchor = document.createElement("a");
      anchor.appendChild(image);
      anchor.className = "projectAnchor";
      anchor.href = `https://vikas236.github.io/${projectLinks[i]}`;
      anchor.target = "_blank";
      project.classList.add("project");
      image.src = `/dist/images/${projectIcons[i]}`;
      projectsBox.appendChild(project);
      projectsBox.childNodes[i].appendChild(anchor);
      e.addProjectLabels(i);
    }
    e.showLabel();
  };

  // Add labels to the projects
  const addProjectLabels = (i) => {
    const project = document.querySelectorAll(".project");
    const label = document.createElement("div");
    const h3 = document.createElement("h3");
    const icons = document.createElement("div");
    icons.className = "code_links";
    icons.innerHTML = `<a href="https://github.com/vikas236/${projectLinks[i]}" target=_blank><i class="bx bx-code-alt bx-sm" ></a></i>
                      <a href="https://vikas236.github.io/${projectLinks[i]}"  target=_blank><i class="bx bx-link-external bx-sm"></i></a>`;
    h3.textContent = `${projectNames[i]}`;
    label.appendChild(h3);
    label.appendChild(icons);
    label.classList.add("project_label");
    project[i].appendChild(label);
  };

  // Show label by hovering on project
  const showLabel = () => {
    const project = document.querySelectorAll(".project");
    const label = document.querySelectorAll(".project_label");
    for (let i = 0; i < 6; i += 1) {
      project[i].addEventListener("mouseover", () => {
        label[i].style.opacity = "100%";
      });
      project[i].addEventListener("mouseout", () => {
        label[i].style.opacity = "0%";
      });
    }
  };

  return {
    addSkills,
    addProjects,
    addProjectLabels,
    addSlide,
    moveSlider,
    slide,
    showLabel,
  };
})();

export default e;

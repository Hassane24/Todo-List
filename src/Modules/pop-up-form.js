const addTaskButton = document.getElementById("add-button");
const cancelButton = document.querySelector(".cancel-button");
const submitButton = document.querySelector(".submit");
const overlay = document.getElementById("overlay");
const lowPrio = document.querySelector(".low");
const mediumPrio = document.querySelector(".medium");
const highPrio = document.querySelector(".high");
const prioError = document.querySelector("span.error");
const taskTitle = document.querySelector("[data-title]");
const taskAbout = document.querySelector("[data-about]");
const addProjectButton = document.querySelector(".add-project-button");
const addProject = document.querySelector("#add-project");
const cancelProject = document.querySelector("#cancel-project");
const projectForm = document.querySelector(".projects");
const projectTitleInput = document.getElementById("project");
const sideBar = document.querySelector(".sidebar");
const titleError = document.querySelector(".title-error");

addProjectButton.addEventListener("click", () => {
  UI.clearFormInputs(projectTitleInput, "");
  UI.addClass(addProjectButton, "hide");
  UI.removeClass(projectForm, "hide");
  UI.removeClass(addProject, "active");
  UI.removeClass(cancelProject, "active");
  UI.removeClass(titleError, "active");
});

cancelProject.addEventListener("click", () => {
  UI.addClass(projectForm, "hide");
  UI.removeClass(addProjectButton, "hide");
});

addProject.addEventListener("click", () => {
  if (projectTitleInput.value == "") {
    UI.addClass(titleError, "active");
    UI.showError(titleError, "Please choose a project title");
    UI.addClass(addProject, "active");
    UI.addClass(cancelProject, "active");
    return;
  }
  UI.addClass(projectForm, "hide");
  UI.removeClass(addProjectButton, "hide");
  createProjects();
});

lowPrio.addEventListener("click", () => {
  UI.addClass(lowPrio, "active");
  UI.removeClass(mediumPrio, "active");
  UI.removeClass(highPrio, "active");
  UI.removeClass(prioError, "active");
});

mediumPrio.addEventListener("click", () => {
  UI.addClass(mediumPrio, "active");
  UI.removeClass(lowPrio, "active");
  UI.removeClass(highPrio, "active");
  UI.removeClass(prioError, "active");
});

highPrio.addEventListener("click", () => {
  UI.addClass(highPrio, "active");
  UI.removeClass(mediumPrio, "active");
  UI.removeClass(lowPrio, "active");
  UI.removeClass(prioError, "active");
});

addTaskButton.addEventListener("click", () => {
  UI.removeClass(lowPrio, "active");
  UI.removeClass(mediumPrio, "active");
  UI.removeClass(highPrio, "active");
  UI.removeClass(prioError, "active");
  UI.clearFormInputs(taskAbout, "");
  UI.clearFormInputs(taskTitle, "");
  const form = document.querySelector(".form");
  UI.openForm(form);
});

overlay.addEventListener("click", () => {
  const form = document.querySelector(".form.active");
  UI.closeForm(form);
});

cancelButton.addEventListener("click", () => {
  const form = document.querySelector(".form.active");
  UI.closeForm(form);
});

submitButton.addEventListener("click", (e) => {
  if (
    !lowPrio.classList.contains("active") &&
    !mediumPrio.classList.contains("active") &&
    !highPrio.classList.contains("active")
  ) {
    e.preventDefault();
    UI.addClass(prioError, "active");
    UI.showError(prioError, "Please choose a priority");
  }

  if (lowPrio.classList.contains(".active")) !e.preventDefault();
  if (mediumPrio.classList.contains(".active")) !e.preventDefault();
  if (highPrio.classList.contains(".active")) !e.preventDefault();
});

function createProjects() {
  const image = document.createElement("img");
  image.src = "Images/format-list-checks.svg";
  const span = document.createElement("span");
  UI.addTextToElement(span, projectTitleInput.value);
  const div = document.createElement("div");
  UI.appendChildToParent(div, image);
  UI.appendChildToParent(div, span);
  UI.addClass(div, "a-project");
  UI.appendChildToParent(sideBar, div);
  console.log(image);
}

const UI = (() => {
  function openForm(form) {
    if (form == null) return;
    form.classList.add("active");
    overlay.classList.add("active");
  }

  function closeForm(form) {
    if (form == null) return;
    form.classList.remove("active");
    overlay.classList.remove("active");
  }

  function addClass(element, clas) {
    element.classList.add(clas);
  }

  function removeClass(element, clas) {
    element.classList.remove(clas);
  }

  function showError(element, message) {
    element.textContent = message;
  }

  function clearFormInputs(element, clear) {
    element.value = clear;
  }

  function appendChildToParent(parent, child) {
    parent.append(child);
  }

  function addTextToElement(element, text) {
    element.textContent = text;
  }

  return {
    closeForm,
    clearFormInputs,
    addClass,
    removeClass,
    showError,
    openForm,
    appendChildToParent,
    addTextToElement,
  };
})();

export { UI };

const UI = (() => {
  function loadHomePage() {
    addTask();
    closeTaskForm();
    addProjectForm();
    prioButtons();
  }

  function addTask() {
    const lowPrio = document.querySelector(".low");
    const mediumPrio = document.querySelector(".medium");
    const highPrio = document.querySelector(".high");
    const prioError = document.querySelector("span.error");
    const taskTitle = document.querySelector("[data-title]");
    const taskAbout = document.querySelector("[data-about]");
    const addTaskButton = document.getElementById("add-button");
    removeClass(lowPrio, "active");
    removeClass(mediumPrio, "active");
    removeClass(highPrio, "active");
    removeClass(prioError, "active");
    clearFormInputs(taskAbout, "");
    clearFormInputs(taskTitle, "");
    addTaskButton.addEventListener("click", openForm);
  }

  function closeTaskForm() {
    const overlay = document.getElementById("overlay");
    const cancelButton = document.querySelector(".cancel-button");
    const submitButton = document.querySelector(".submit");
    const lowPrio = document.querySelector(".low");
    const mediumPrio = document.querySelector(".medium");
    const highPrio = document.querySelector(".high");
    const prioError = document.querySelector("span.error");
    overlay.addEventListener("click", closeForm);
    cancelButton.addEventListener("click", closeForm);
    submitButton.addEventListener("click", (e) => {
      if (
        !lowPrio.classList.contains("active") &&
        !mediumPrio.classList.contains("active") &&
        !highPrio.classList.contains("active")
      ) {
        e.preventDefault();
        addClass(prioError, "active");
        showError(prioError, "Please choose a priority");
      }

      if (lowPrio.classList.contains(".active")) !e.preventDefault();
      if (mediumPrio.classList.contains(".active")) !e.preventDefault();
      if (highPrio.classList.contains(".active")) !e.preventDefault();
    });
  }

  function prioButtons() {
    const lowPrio = document.querySelector(".low");
    const mediumPrio = document.querySelector(".medium");
    const highPrio = document.querySelector(".high");
    lowPrio.addEventListener("click", prioButtonsActiveGreen);
    mediumPrio.addEventListener("click", prioButtonsActiveYellow);
    highPrio.addEventListener("click", prioButtonsActiveRed);
  }

  function prioButtonsActiveGreen() {
    const lowPrio = document.querySelector(".low");
    const mediumPrio = document.querySelector(".medium");
    const highPrio = document.querySelector(".high");
    const prioError = document.querySelector("span.error");
    addClass(lowPrio, "active");
    removeClass(mediumPrio, "active");
    removeClass(highPrio, "active");
    removeClass(prioError, "active");
  }

  function prioButtonsActiveYellow() {
    const lowPrio = document.querySelector(".low");
    const mediumPrio = document.querySelector(".medium");
    const highPrio = document.querySelector(".high");
    const prioError = document.querySelector("span.error");
    addClass(mediumPrio, "active");
    removeClass(lowPrio, "active");
    removeClass(highPrio, "active");
    removeClass(prioError, "active");
  }

  function prioButtonsActiveRed() {
    const lowPrio = document.querySelector(".low");
    const mediumPrio = document.querySelector(".medium");
    const highPrio = document.querySelector(".high");
    const prioError = document.querySelector("span.error");
    addClass(highPrio, "active");
    removeClass(mediumPrio, "active");
    removeClass(lowPrio, "active");
    removeClass(prioError, "active");
  }

  function openForm() {
    const form = document.querySelector("form.form");
    const overlay = document.getElementById("overlay");
    addClass(form, "active");
    addClass(overlay, "active");
  }

  function closeForm() {
    const form = document.querySelector("form.form");
    const overlay = document.getElementById("overlay");
    removeClass(form, "active");
    removeClass(overlay, "active");
  }

  function addProjectForm() {
    const addProjectButton = document.querySelector(".add-project-button");
    const addProject = document.querySelector("#add-project");
    const cancelProject = document.querySelector("#cancel-project");
    addProjectButton.addEventListener("click", openProjectForm);
    cancelProject.addEventListener("click", closeProjectForm);
    addProject.addEventListener("click", addProjectTitle);
  }

  function addProjectTitle() {
    const addProjectButton = document.querySelector(".add-project-button");
    const addProject = document.querySelector("#add-project");
    const cancelProject = document.querySelector("#cancel-project");
    const projectForm = document.querySelector(".projects");
    const projectTitleInput = document.getElementById("project");
    const titleError = document.querySelector(".title-error");
    if (projectTitleInput.value == "") {
      addClass(titleError, "active");
      showError(titleError, "Please choose a project title");
      addClass(addProject, "active");
      addClass(cancelProject, "active");
      return;
    }
    addClass(projectForm, "hide");
    removeClass(addProjectButton, "hide");
    createProjects();
  }

  function createProjects() {
    const projectTitleInput = document.getElementById("project");
    const sideBar = document.querySelector(".sidebar");
    const image = document.createElement("img");
    image.src = "Images/format-list-checks.svg";
    const span = document.createElement("span");
    UI.addTextToElement(span, projectTitleInput.value);
    const div = document.createElement("div");
    UI.appendChildToParent(div, image);
    UI.appendChildToParent(div, span);
    UI.addClass(div, "a-project");
    UI.appendChildToParent(sideBar, div);
  }

  function closeProjectForm() {
    const addProjectButton = document.querySelector(".add-project-button");
    const projectForm = document.querySelector(".projects");
    addClass(projectForm, "hide");
    removeClass(addProjectButton, "hide");
  }

  function openProjectForm() {
    const addProjectButton = document.querySelector(".add-project-button");
    const addProject = document.querySelector("#add-project");
    const cancelProject = document.querySelector("#cancel-project");
    const projectForm = document.querySelector(".projects");
    const projectTitleInput = document.getElementById("project");
    const titleError = document.querySelector(".title-error");
    clearFormInputs(projectTitleInput, "");
    addClass(addProjectButton, "hide");
    removeClass(projectForm, "hide");
    removeClass(addProject, "active");
    removeClass(cancelProject, "active");
    removeClass(titleError, "active");
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
    loadHomePage,
  };
})();

export { UI };

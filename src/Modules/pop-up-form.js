import { task } from "./Task";

const UI = (() => {
  let taskArray = [];
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
  const date = document.getElementById("due-date");
  const addProjectButton = document.querySelector(".add-project-button");
  const addProject = document.querySelector("#add-project");
  const cancelProject = document.querySelector("#cancel-project");
  const projectForm = document.querySelector(".projects");
  const projectTitleInput = document.getElementById("project");
  const sideBar = document.querySelector(".sidebar");
  const titleError = document.querySelector(".title-error");

  function loadHomePage() {
    addTask();
    closeTaskForm();
    addProjectForm();
    prioButtons();
  }

  function addTask() {
    addTaskButton.addEventListener("click", openForm);
  }

  function closeTaskForm() {
    overlay.addEventListener("click", closeForm);
    cancelButton.addEventListener("click", closeForm);
    submitButton.addEventListener("click", () => {
      //     Input Error

      if (taskTitle.value == "" || date.value == "")
        return alert("Task Title is empty or you havent chose the due date");

      //     Priority Error

      if (
        !lowPrio.classList.contains("active") &&
        !mediumPrio.classList.contains("active") &&
        !highPrio.classList.contains("active")
      ) {
        addClass(prioError, "active");
        showError(prioError, "Please choose a priority");
        return;
      }

      if (lowPrio.classList.contains("active")) {
        taskArray.push(
          task(taskTitle.value, taskAbout.value, date.value, "low")
        );
        displayTasks(taskArray);
        closeForm();
      }

      if (mediumPrio.classList.contains("active")) {
        taskArray.push(
          task(taskTitle.value, taskAbout.value, date.value, "low")
        );
        displayTasks(taskArray);
        closeForm();
      }

      if (highPrio.classList.contains("active")) {
        taskArray.push(
          task(taskTitle.value, taskAbout.value, date.value, "low")
        );
        displayTasks(taskArray);
        closeForm();
      }
      displayTasks(taskArray);
    });
  }

  function displayTasks(array) {
    const taskItems = document.querySelector(".task-items");
    console.log(taskItems);
    for (let i = 0; i < array.length; i++) {
      const itemDiv = document.createElement("div");
      addClass(itemDiv, "item");
      appendChildToParent(taskItems, itemDiv);
      const div = document.createElement("div");
      appendChildToParent(itemDiv, div);
      const checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.setAttribute("id", "checkbox");
      const taskTitleDiv = document.createElement("div");
      addClass(taskTitleDiv, "task-title");
      addTextToElement(taskTitleDiv, array[i].title);
      const deleteButton = document.createElement("button");
      addClass(deleteButton, "delete-button");
      deleteButton.innerHTML = "&times;";
      appendChildToParent(div, checkBox);
      appendChildToParent(div, taskTitleDiv);
      appendChildToParent(div, deleteButton);
      const thinLine = document.createElement("div");
      addClass(thinLine, "thin-line");
      appendChildToParent(itemDiv, thinLine);
      const taskInfoDiv = document.createElement("div");
      addClass(taskInfoDiv, "task-info");
      addTextToElement(taskInfoDiv, array[i].description);
      appendChildToParent(itemDiv, taskInfoDiv);
      const thinLine1 = document.createElement("div");
      addClass(thinLine1, "thin-line");
      appendChildToParent(itemDiv, thinLine1);
      const taskStatusDiv = document.createElement("div");
      addClass(taskStatusDiv, "task-status");
      appendChildToParent(itemDiv, taskStatusDiv);
      const datey = document.createElement("input");
      datey.setAttribute("type", "date");
      datey.setAttribute("name", "date");
      datey.setAttribute("id", "date");
      datey.value = array[i].dueDate;
      appendChildToParent(taskStatusDiv, datey);
    }
  }

  function prioButtons() {
    lowPrio.addEventListener("click", prioButtonsActiveGreen);
    mediumPrio.addEventListener("click", prioButtonsActiveYellow);
    highPrio.addEventListener("click", prioButtonsActiveRed);
  }

  function prioButtonsActiveGreen() {
    addClass(lowPrio, "active");
    removeClass(mediumPrio, "active");
    removeClass(highPrio, "active");
    removeClass(prioError, "active");
  }

  function prioButtonsActiveYellow() {
    addClass(mediumPrio, "active");
    removeClass(lowPrio, "active");
    removeClass(highPrio, "active");
    removeClass(prioError, "active");
  }

  function prioButtonsActiveRed() {
    addClass(highPrio, "active");
    removeClass(mediumPrio, "active");
    removeClass(lowPrio, "active");
    removeClass(prioError, "active");
  }

  function openForm() {
    removeClass(lowPrio, "active");
    removeClass(mediumPrio, "active");
    removeClass(highPrio, "active");
    removeClass(prioError, "active");
    clearFormInputs(taskAbout, "");
    clearFormInputs(taskTitle, "");
    const form = document.querySelector("div.form");
    addClass(form, "active");
    addClass(overlay, "active");
  }

  function closeForm() {
    const form = document.querySelector("div.form");
    removeClass(form, "active");
    removeClass(overlay, "active");
  }

  function addProjectForm() {
    addProjectButton.addEventListener("click", openProjectForm);
    cancelProject.addEventListener("click", closeProjectForm);
    addProject.addEventListener("click", addProjectTitle);
  }

  function addProjectTitle() {
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
    const image = document.createElement("img");
    const closeImage = document.createElement("img");
    closeImage.src = "Images/close-circle-outline.svg";
    image.src = "Images/format-list-checks.svg";
    const span = document.createElement("span");
    addTextToElement(span, projectTitleInput.value);
    const div = document.createElement("div");
    appendChildToParent(div, image);
    appendChildToParent(div, span);
    appendChildToParent(div, closeImage);
    addClass(div, "a-project");
    appendChildToParent(sideBar, div);
  }

  function closeProjectForm() {
    addClass(projectForm, "hide");
    removeClass(addProjectButton, "hide");
  }

  function openProjectForm() {
    clearFormInputs(projectTitleInput, "");
    addClass(addProjectButton, "hide");
    removeClass(projectForm, "hide");
    removeClass(addProject, "active");
    removeClass(cancelProject, "active");
    removeClass(titleError, "active");
  }

  // Utility functions

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

import { task } from "./Task";

const UI = (() => {
  let taskArray = [];
  // Caching The DOM
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
    getTasks();
    displayTasks(taskArray[0].tasks);
  }

  function addTask() {
    addTaskButton.addEventListener("click", openForm);
    console.log("here");
  }

  function closeTaskForm() {
    overlay.addEventListener("click", closeForm);
    cancelButton.addEventListener("click", closeForm);
    submitButton.addEventListener("click", () => {
      //finding which project the user clicked on
      const clickedProject = taskArray.find((project) => project.isOn);
      //removing elements so they dont duplicate
      removeElementsByClass("item");

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
        return showError(prioError, "Please choose a priority");
      }

      if (lowPrio.classList.contains("active")) {
        clickedProject.tasks.push(
          task(taskTitle.value, taskAbout.value, date.value, "low")
        );
        closeForm();
        displayTasks(clickedProject.tasks);
        return storeTasks(clickedProject.projectName, clickedProject);
      }

      if (mediumPrio.classList.contains("active")) {
        clickedProject.tasks.push(
          task(taskTitle.value, taskAbout.value, date.value, "medium")
        );
        closeForm();
        displayTasks(clickedProject.tasks);
        return storeTasks(clickedProject.projectName, clickedProject);
      }

      if (highPrio.classList.contains("active")) {
        clickedProject.tasks.push(
          task(taskTitle.value, taskAbout.value, date.value, "high")
        );
        closeForm();
        displayTasks(clickedProject.tasks);
        return storeTasks(clickedProject.projectName, clickedProject);
      }
    });
  }

  function displayTasks(array) {
    const taskItems = document.querySelector(".task-items");
    const clickedProject = taskArray.find((project) => project.isOn);
    for (let i = 0; i < array.length; i++) {
      array[i].id = "task" + i;
      const itemDiv = document.createElement("div");
      addClass(itemDiv, "item");
      if (array[i].priority == "low") addClass(itemDiv, "low-prio");
      if (array[i].priority == "medium") addClass(itemDiv, "mid-prio");
      if (array[i].priority == "high") addClass(itemDiv, "high-prio");
      appendChildToParent(taskItems, itemDiv);
      const div = document.createElement("div");
      appendChildToParent(itemDiv, div);
      const checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.setAttribute("id", "checkbox");
      const taskTitleDiv = document.createElement("div");
      addClass(taskTitleDiv, "task-header");
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
      deleteButton.addEventListener("click", () => {
        itemDiv.remove();
        clickedProject.tasks = clickedProject.tasks.filter((todo) =>
          todo.id !== array[i].id ? true : false
        );
        storeTasks(clickedProject.projectName, clickedProject);
      });
    }
  }

  const storeTasks = (arrayName, arrayToBeStored) =>
    localStorage.setItem(arrayName, JSON.stringify(arrayToBeStored));

  function getTasks() {
    let keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      taskArray.push(JSON.parse(localStorage.getItem(keys[i])));
      createProjects(keys[i]);
    }

    taskArray === undefined || taskArray.length == 0
      ? taskArray.push({ projectName: "default", tasks: [], isOn: true })
      : null;
  }

  function prioButtons() {
    lowPrio.addEventListener("click", prioButtonsActiveGreen);
    mediumPrio.addEventListener("click", prioButtonsActiveYellow);
    highPrio.addEventListener("click", prioButtonsActiveRed);
  }

  function prioButtonsActiveGreen() {
    addClass(lowPrio, "active");
    removeClass([mediumPrio, highPrio, prioError], "active");
  }

  function prioButtonsActiveYellow() {
    addClass(mediumPrio, "active");
    removeClass([lowPrio, highPrio, prioError], "active");
  }

  function prioButtonsActiveRed() {
    addClass(highPrio, "active");
    removeClass([mediumPrio, lowPrio, prioError], "active");
  }

  function openForm() {
    removeClass([lowPrio, mediumPrio, highPrio, prioError], "active");
    clearFormInputs([taskAbout, taskTitle, date]);
    const form = document.querySelector("div.form");
    addClass([form, overlay], "active");
  }

  function closeForm() {
    const form = document.querySelector("div.form");
    removeClass([form, overlay], "active");
  }

  function addProjectForm() {
    addProjectButton.addEventListener("click", openProjectForm);
    cancelProject.addEventListener("click", closeProjectForm);
    addProject.addEventListener("click", addProjectTitle);
  }

  function addProjectTitle() {
    if (projectTitleInput.value == "") {
      addClass([titleError, cancelProject, addProject], "active");
      showError(titleError, "Please choose a project title");
      return;
    }
    addClass(projectForm, "hide");
    removeClass(addProjectButton, "hide");
    createProjects();
  }

  function createProjects(projectName) {
    const image = document.createElement("img");
    const closeButton = document.createElement("img");
    closeButton.src = "Images/close-circle-outline.svg";
    image.src = "Images/format-list-checks.svg";
    const span = document.createElement("span");
    addTextToElement(span, projectTitleInput.value || projectName);
    const div = document.createElement("div");
    appendChildToParent(div, image);
    appendChildToParent(div, span);
    appendChildToParent(div, closeButton);
    addClass(div, "a-project");
    appendChildToParent(sideBar, div);
    closeButton.addEventListener("click", () => {
      if (span.textContent === "default") return;
      localStorage.removeItem(span.textContent);
      taskArray = taskArray.filter(
        (project) => project.projectName === span.textContent
      );
      div.remove();
    });
    span.addEventListener("click", () => {
      if (
        !taskArray.some((project) => project.projectName === span.textContent)
      ) {
        const projectObject = {
          projectName: span.textContent,
          tasks: [],
          isOn: false,
        };
        taskArray.push(projectObject);
      }
      taskArray.forEach((project) => (project.isOn = false));
      taskArray.find(
        (project) => project.projectName === span.textContent
      ).isOn = true;
      const createdProject = taskArray.find(
        (project) => project.projectName === span.textContent
      );
      removeElementsByClass("item");
      displayTasks(createdProject.tasks);
    });
  }

  function closeProjectForm() {
    addClass(projectForm, "hide");
    removeClass(addProjectButton, "hide");
    removeClass(titleError, "active");
  }

  function openProjectForm() {
    clearFormInputs(projectTitleInput);
    addClass(addProjectButton, "hide");
    removeClass([projectForm, addProject, cancelProject, titleError], "hide");
  }

  // Utility functions

  const addClass = (elements, className) =>
    Array.isArray(elements)
      ? elements.forEach((element) => element.classList.add(className))
      : elements.classList.add(className);

  const removeClass = (elements, className) =>
    Array.isArray(elements)
      ? elements.forEach((element) => element.classList.remove(className))
      : elements.classList.remove(className);

  const showError = (element, message) => (element.textContent = message);

  const clearFormInputs = (elements) =>
    Array.isArray(elements)
      ? elements.forEach((element) => (element.value = ""))
      : (elements.value = "");

  const appendChildToParent = (parent, child) => parent.append(child);

  const addTextToElement = (element, text) => (element.textContent = text);

  function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) elements[0].parentNode.removeChild(elements[0]);
  }

  return {
    loadHomePage,
  };
})();

export { UI };

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

const popUpForm = (() => {
  lowPrio.addEventListener("click", () => {
    addClass(lowPrio, "active");
    removeClass(mediumPrio, "active");
    removeClass(highPrio, "active");
    removeClass(prioError, "active");
  });

  mediumPrio.addEventListener("click", () => {
    addClass(mediumPrio, "active");
    removeClass(lowPrio, "active");
    removeClass(highPrio, "active");
    removeClass(prioError, "active");
  });

  highPrio.addEventListener("click", () => {
    addClass(highPrio, "active");
    removeClass(mediumPrio, "active");
    removeClass(lowPrio, "active");
    removeClass(prioError, "active");
  });

  addTaskButton.addEventListener("click", () => {
    removeClass(lowPrio, "active");
    removeClass(mediumPrio, "active");
    removeClass(highPrio, "active");
    removeClass(prioError, "active");
    clearFormInputs(taskAbout, "");
    clearFormInputs(taskTitle, "");
    const form = document.querySelector(".form");
    openForm(form);
  });

  overlay.addEventListener("click", () => {
    const form = document.querySelector(".form.active");
    closeForm(form);
  });

  cancelButton.addEventListener("click", () => {
    const form = document.querySelector(".form.active");
    closeForm(form);
  });

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
})();

export { popUpForm };

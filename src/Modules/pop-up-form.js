const popUpForm = (() => {
  const addTaskButton = document.getElementById("add-button");
  const cancelButton = document.querySelector(".cancel-button");
  const submitButton = document.querySelector(".submit");
  const overlay = document.getElementById("overlay");
  const lowPrio = document.querySelector(".low");
  const mediumPrio = document.querySelector(".medium");
  const highPrio = document.querySelector(".high");

  lowPrio.addEventListener("click", () => {
    addClass(lowPrio, "active");
    removeClass(mediumPrio, "active");
    removeClass(highPrio, "active");
  });

  mediumPrio.addEventListener("click", () => {
    addClass(mediumPrio, "active");
    removeClass(lowPrio, "active");
    removeClass(highPrio, "active");
  });

  highPrio.addEventListener("click", () => {
    addClass(highPrio, "active");
    removeClass(mediumPrio, "active");
    removeClass(lowPrio, "active");
  });

  addTaskButton.addEventListener("click", () => {
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

  submitButton.addEventListener("click", () => {});

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
})();

export { popUpForm };

const addTaskButton = document.getElementById("add-button");
const cancelButton = document.querySelector(".cancel-button");
const submitButton = document.querySelector(".submit");
const overlay = document.getElementById("overlay");
const lowPrio = document.querySelector(".low");
const mediumPrio = document.querySelector(".medium");
const highPrio = document.querySelector(".high");

lowPrio.addEventListener("click", () => {
  addClass(lowPrio, "active");
  removeClass(mediumPrio, "active");
  removeClass(highPrio, "active");
});

mediumPrio.addEventListener("click", () => {
  addClass(mediumPrio, "active");
  removeClass(lowPrio, "active");
  removeClass(highPrio, "active");
});

highPrio.addEventListener("click", () => {
  addClass(highPrio, "active");
  removeClass(mediumPrio, "active");
  removeClass(lowPrio, "active");
});

addTaskButton.addEventListener("click", () => {
  const form = addTaskButton;
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

submitButton.addEventListener("click", () => {});

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

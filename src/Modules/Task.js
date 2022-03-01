function task(title, description, dueDate, priority, isDone = false) {
  const getTitle = () => {
    return title;
  };

  const getDate = () => {
    return dueDate;
  };

  const getDescription = () => {
    return description;
  };

  const getPriority = () => {
    return priority;
  };

  const toggle = () => {
    isDone = !isDone;
  };

  return {
    title,
    description,
    dueDate,
    priority,
    isDone,
    getTitle,
    getDescription,
    getPriority,
    toggle,
    getDate,
  };
}

export { task };

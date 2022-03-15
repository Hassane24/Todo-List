function task(title, description, dueDate, priority, isDone = false) {
  return {
    title,
    description,
    dueDate,
    priority,
    isDone,
  };
}

export { task };

function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item) {
  const itemToRemove = items.indexOf(item);

  if (itemToRemove !== -1) {
    const removed = items.splice(itemToRemove, 1);
    return removed[0];
  }

  return undefined;
}

export { choice, remove };

export function getRandomId() {
  return `${Math.random().toString(36).slice(2, 9)}${new Date().getTime()}`;
}

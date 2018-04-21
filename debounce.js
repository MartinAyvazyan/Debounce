function trailingDebounce(func, wait) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => func(...args), wait);
  };
}
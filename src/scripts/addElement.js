const setElement = (parentElement, childElementTag) => {
  const childElement = document.createElement(childElementTag);
  parentElement.appendChild(childElement);
  return childElement;
};

export { setElement };

const colorizeElement = (node) => {
  node.classList.add("new-class");
  node.setAttribute("data-tag", node.tagName);
  node.style.fontSize = "12px";
  node.style.color = "#f1f1f1";
  return node;
  // Zaimplementuj zadanie zgodnie z wytycznymi
};

module.exports = colorizeElement;

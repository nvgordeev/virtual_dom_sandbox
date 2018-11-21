export function node(type, props, ...children) {
  return {
    type,
    props,
    children
  };
}
export function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  const $root = document.createElement(node.type);
  node.children.map(createElement).forEach($root.appendChild.bind($root));
  return $root;
}
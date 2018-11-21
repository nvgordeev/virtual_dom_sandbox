const RESERVED_WORDS = {
  className: 'class'
};

class Component {
  constructor(props) {
    this.props = props;
  }

}

function isEvent(name) {
  return /^on/.test(name);
}

function getEventName(name) {
  return name.slice(2).toLowerCase();
}

function setProps($element, props) {
  for (name in props) {
    const prop = props[name];

    if (isEvent(name)) {
      $element.addEventListener(getEventName(name), prop);
    } else if (RESERVED_WORDS[name]) {
      $element.setAttribute(RESERVED_WORDS[name], prop);
    } else if (prop) {
      $element.setAttribute(name, prop);
    }
  }
}

function makeFlat(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(makeFlat(val)) : acc.concat(val), []);
}

function createElement(element, props, ...children) {
  if (typeof element === 'function') {
    return element(props || {});
  }

  const $root = document.createElement(element);
  setProps($root, props);
  children && makeFlat(children).map(el => {
    if (typeof el === 'string') {
      return document.createTextNode(el);
    }

    if (el instanceof HTMLElement) {
      return el;
    }

    return createElement(el);
  }).forEach($root.appendChild.bind($root));
  return $root;
}

const MyOwnVirtualDom = {
  render: (element, $root) => $root.appendChild(element),
  createElement,
  Component
};
export default MyOwnVirtualDom;
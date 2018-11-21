
function createElement(element, props, ...children) {
    if (typeof element === 'function') return element(props || {})
    const $root = document.createElement(element);
    children && children.map(el =>{
        if (typeof el === 'string') {
            return document.createTextNode(el)
        } 
        if (el instanceof HTMLElement) {
            return el
        }
        return createElement(el)
    }).forEach($root.appendChild.bind($root));
    return $root
}

const MyOwnVirtualDom = {
    render: (element, $root) => $root.appendChild(element)
}

MyOwnVirtualDom.createElement = createElement

export default MyOwnVirtualDom
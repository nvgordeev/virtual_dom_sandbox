const RESERVED_WORDS = {
    className: 'class'
}


function setProps($element, props){
    for (name in props) {
        if (RESERVED_WORDS[name]) {
            $element.setAttribute(RESERVED_WORDS[name], props[name])    
        } else if (props[name]) {
            $element.setAttribute(name, props[name])
        }
    }
}

function createElement(element, props, ...children) {
    if (typeof element === 'function') {
        return element(props || {})
    }
    
    const $root = document.createElement(element);
    
    setProps($root, props);
    
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
    render: (element, $root) => $root.appendChild(element),
    createElement
}

export default MyOwnVirtualDom
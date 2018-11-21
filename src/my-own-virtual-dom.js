export function node(type, props, ...children) {
    return {type, props, children}
}

export function createElement(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }
    const $root = document.createElement(node.type);
    node.children && node.children.map(createElement).forEach($root.appendChild.bind($root));
    return $root
}

function nodeChanged(node1, node2) {
    return typeof node1 !== typeof node2 ||
           typeof node1 == 'string' && node1 !== node2 ||
           node1.type !== node2.type
}

export function updateElement($parent, newNode, oldNode, index = 0) {
    if (!oldNode) {
        $parent.appendChild(
            createElement(newNode)
        );
    } else if (!newNode) {
        $parent.removeChild(
            $parent.childNodes[index]
        )
    } else if (nodeChanged(newNode, oldNode)) {
        $parent.replaceChild(
            createElement(newNode),
            $parent.childNodes[index]
        )
    } else if (newNode.type) {
        const newLength = newNode.children.length;
        const oldLength = oldNode.children.length;
        for (let i = 0; i < newLength || i < oldLength; i++) {
            updateElement(
                $parent.childNodes[index],
                newNode.children[i],
                oldNode.children[i],
                i
            )
        }
    }
}
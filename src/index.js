import TestNode from './TestNode.js';
import MyOwnVirtualDom from './my-own-virtual-dom.js'

const $root = document.getElementById('root');

MyOwnVirtualDom.render(<TestNode protect={true} />, $root)
import TestNode from './TestNode.js';
import {createElement} from './my-own-virtual-dom.js'

const $root = document.getElementById('root');

const app = TestNode({protect: true})

$root.appendChild(createElement(app));

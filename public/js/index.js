import TestNode from './TestNode.js';
import MyOwnVirtualDom from './my-own-virtual-dom.js';
const $root = document.getElementById('root');
const $button = document.getElementById('emperor');
const app = TestNode({
  protect: false
});
const appUpdated = TestNode({
  protect: true
});
MyOwnVirtualDom.render(MyOwnVirtualDom.createElement(TestNode, {
  protect: true
}), $root);
$button.addEventListener('click', () => {
  updateElement($root, app, appUpdated);
});
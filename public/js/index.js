import App from './App.js';
import MyOwnVirtualDom from './my-own-virtual-dom.js';
const $root = document.getElementById('root');
MyOwnVirtualDom.render(MyOwnVirtualDom.createElement(App, {
  protect: true
}), $root);
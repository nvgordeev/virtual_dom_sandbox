import App from './App.js';
import MyOwnVirtualDom from './my-own-virtual-dom.js'

const $root = document.getElementById('root');

MyOwnVirtualDom.render(<App protect={true} />, $root)
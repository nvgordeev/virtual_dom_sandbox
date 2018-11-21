import MyOwnVirtualDom from '../my-own-virtual-dom.js';
export default (({
  items
}) => {
  return MyOwnVirtualDom.createElement("ul", {
    className: "list"
  }, items.map(item => MyOwnVirtualDom.createElement("li", null, item)));
});
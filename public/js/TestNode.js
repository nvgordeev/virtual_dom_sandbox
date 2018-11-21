import MyOwnVirtualDom from './my-own-virtual-dom.js';
export default (({
  protect
}) => {
  return MyOwnVirtualDom.createElement("div", null, MyOwnVirtualDom.createElement("h2", null, MyOwnVirtualDom.createElement("input", {
    type: "checkbox",
    checked: false
  }), "It is better to die for the Emperor than live for yourself!"), MyOwnVirtualDom.createElement("ul", {
    className: "list"
  }, MyOwnVirtualDom.createElement("li", null, "My armor is contempt"), MyOwnVirtualDom.createElement("li", null, "My shield is disgust"), MyOwnVirtualDom.createElement("li", null, "My sword is hatred"), MyOwnVirtualDom.createElement("li", null, "In the Emperor's name"), MyOwnVirtualDom.createElement("li", null, "Let none survive!")), protect && MyOwnVirtualDom.createElement("button", {
    onClick: () => alert('For the Emperor!')
  }, " Emperor protect us ") || MyOwnVirtualDom.createElement("div", null));
});
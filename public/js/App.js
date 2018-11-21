import MyOwnVirtualDom from './my-own-virtual-dom.js';
import List from './components/List.js';
export default (({
  protect
}) => {
  const litany = "My armor is contempt \n My shield is disgust \n My sword is hatred \n In the Emperor's name \n Let none survive!";
  return MyOwnVirtualDom.createElement("div", null, MyOwnVirtualDom.createElement("h2", null, MyOwnVirtualDom.createElement("input", {
    type: "checkbox",
    checked: false
  }), "It is better to die for the Emperor than live for yourself!"), MyOwnVirtualDom.createElement(List, {
    items: litany.split('\n')
  }), protect && MyOwnVirtualDom.createElement("button", {
    onClick: () => alert('For the Emperor!')
  }, " Emperor protect us ") || MyOwnVirtualDom.createElement("div", null));
});
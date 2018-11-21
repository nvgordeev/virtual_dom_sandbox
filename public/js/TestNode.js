import { node } from './my-own-virtual-dom.js';
/** @jsx  */

export default node("div", null, node("h2", null, "It is better to die for the Emperor than live for yourself!"), node("ul", {
  className: "list"
}, node("li", null, "My armor is contempt"), node("li", null, "My shield is disgust"), node("li", null, "My sword is hatred"), node("li", null, "In the Emperor's name"), node("li", null, "Let none survive!")), node("button", null, " Emperor protect us "));
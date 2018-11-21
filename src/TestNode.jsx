import {node} from './my-own-virtual-dom.js'

/** @jsx  */
export default ({protect}) => {
  return (
    <div>
      <h2>It is better to die for the Emperor than live for yourself!</h2>
      <ul className="list">
        <li>My armor is contempt</li>
        <li>My shield is disgust</li> 
        <li>My sword is hatred</li> 
        <li>In the Emperor's name</li> 
        <li>Let none survive!</li> 
      </ul>
      {protect && <button> Emperor protect us </button>}
    </div>
  )
}
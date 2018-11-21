import MyOwnVirtualDom from './my-own-virtual-dom.js'

export default ({protect}) => {
  return (
    <div>
      <h2>
        <input type="checkbox" checked={false}/>
        It is better to die for the Emperor than live for yourself!
      </h2>
      <ul className="list">
        <li>My armor is contempt</li>
        <li>My shield is disgust</li> 
        <li>My sword is hatred</li> 
        <li>In the Emperor's name</li> 
        <li>Let none survive!</li> 
      </ul>
      {protect && <button onClick={() => alert('For the Emperor!')}> Emperor protect us </button> || <div></div>}
    </div>
  )
}
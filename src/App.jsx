import MyOwnVirtualDom from './my-own-virtual-dom.js'
import List from './components/List.js'

export default ({protect}) => {
  const litany =  "My armor is contempt \n My shield is disgust \n My sword is hatred \n In the Emperor's name \n Let none survive!" 
  return (
    <div>
      <h2>
        <input type="checkbox" checked={false}/>
        It is better to die for the Emperor than live for yourself!
      </h2>
      <List items={litany.split('\n')} />
      {protect && <button onClick={() => alert('For the Emperor!')}> Emperor protect us </button> || <div></div>}
    </div>
  )
}
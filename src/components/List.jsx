import MyOwnVirtualDom from '../my-own-virtual-dom.js'

export default ({items}) => {
    return (
        <ul className="list">
            {items.map(item => <li>{item}</li>)}
        </ul>
    )
  }
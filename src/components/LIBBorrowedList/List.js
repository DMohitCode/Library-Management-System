import React from 'react'

const List = props => {
  const {item, handleRemove} = props
  function removeItem(itemId) {
    handleRemove(itemId)
  }
  return (
      <div className="list_box" key={item.id}>
        <p>{item.title}</p>
        <p>Price- {item.price}</p>
        <button onClick={()=>removeItem(item.id)} >Remove</button>
      </div>
  )
}

export default List

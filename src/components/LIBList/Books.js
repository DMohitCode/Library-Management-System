import React from 'react'
import './styles.css'
const Books = props => {
    const {item, handleClick} = props;
    const {title, author, price, img} = item;
  return (
    <div className='books'>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>Price - {price}Rs</p>
            <button onClick={()=>handleClick(item)} >Borrow Item</button>
        </div>
    </div>
  )
}

export default Books

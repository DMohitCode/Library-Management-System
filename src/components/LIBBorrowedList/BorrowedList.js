import React from 'react'
import './styles.css'

const BorrowedList = props => {
  const {borrowedList, setBorrowedList} = props;

  const handleRemove = (id) =>{
    const arr = borrowedList.filter((item)=>item.id !== id);
    setBorrowedList(arr);
  }
  
  return (
    <section>
     { 
        borrowedList?.map((item)=>(
          <div className="list_box" key={item.id}>
            <p>{item.title}</p>
            <p>Price- {item.price}</p>
            <button onClick={()=>handleRemove(item.id)} >Remove</button>
          </div>
        ))
      }
    </section>
  )
}

export default BorrowedList

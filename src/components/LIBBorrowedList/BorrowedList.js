import React from 'react'
import './styles.css'
import List from './List'
const BorrowedList = props => {
  const {borrowedList, setBorrowedList} = props;

  const handleRemove = (id) =>{
    const arr = borrowedList.filter((item)=>item.id !== id);
    setBorrowedList(arr);
  }
  
  return (
    <section>
     <h2>Borrowed List</h2>
     { 
        borrowedList?.map((item)=>(
          <List item={item} handleRemove={handleRemove}/>
        ))
      }
    </section>
  )
}

export default BorrowedList

import React, { useState } from 'react'
import './App.css';
import LibBookList from './components/LIBList/BookList'
import LibBoorowedList from './components/LIBBorrowedList/BorrowedList'
import {BORROWED_ITEM_LIMIT_CONSTANTS} from './assets/constants'

function App() {
  const [borrowedList, setBorrowedList] = useState([]);
  const [warning, setWarning] = useState(false);
  const [borrowedLimitWarning, setBorrowedLimitWarning] = useState(false);

  const handleClick = (item)=>{
	  let isPresent = false;
	  borrowedList.forEach((product)=>{
		  if (item.id === product.id)
		  isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		if(borrowedList.length < BORROWED_ITEM_LIMIT_CONSTANTS){
			setBorrowedList([...borrowedList, item]);
		} else {
			setBorrowedLimitWarning(true);
			setTimeout(()=>{
				setBorrowedLimitWarning(false);
			}, 2000);
			return ;
		}
	}

  return (
    <React.Fragment>
        <h1>Library Management System</h1>
        <div className='lib-box'>
          <div className="lib-list">
            <LibBookList handleClick={handleClick}/>  
          </div>
          <div className="lib-borrowed-list">
            <LibBoorowedList borrowedList={borrowedList} setBorrowedList={setBorrowedList}/> 
          </div>
        </div>
        {
          warning && <div className='warning'>Item is already Borrowed</div>
        }
        {
          borrowedLimitWarning && <div className='warning'>User can only borrowed 2 items</div>
        }
    </React.Fragment>
  );
}

export default App;

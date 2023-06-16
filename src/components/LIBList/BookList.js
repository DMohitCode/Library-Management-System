import React, { useEffect, useState } from 'react'
import list from '../../assets/LIBData'
import Books from './Books'
import './styles.css'

const BookList = props => {
  const {handleClick} = props
  return (
    <>
      <section>
    	  <h2>Books Available</h2>
        {
            list?.map((item)=>(
                <Books item={item} key={item.id} handleClick={handleClick}/>
            ))
        }
      </section>
    </>
  )
}

export default BookList

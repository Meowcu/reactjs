import React,{useState,useEffect} from 'react'

function CategoryCounter({categoryLenght}) {

    

    useEffect( () => {
        console.log('Use effect worked!');
    },[categoryLenght])
  return (
    <>
    <h1>{categoryCounter}</h1>
    <button onClick={() => setcategoryCounter(categoryCounter+1)}>Increase</button>
    </>
  )
}

export default CategoryCounter
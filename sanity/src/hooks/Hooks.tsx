"use client"

import React, {useState, useEffect} from 'react';

const Hooks = () => {

  let counter = 0

 const [count, setCount] = useState(0)
 const [totalCount, setTotalCount] = useState(0)


 //first ==> side effect / ACTION
  //second ==> clean up
  //third ==> list of dependencies

//  useEffect(() => {
//    first
 
//    return () => {
//      second
//    }
//  }, [third])
 
// variant -1 

// useEffect(() => {
//   alert('I will run on each runder')
// })  

// variant -2

// useEffect(() => { 
//   alert('I will run only once')
// }, [])

// variant - 3

useEffect(() => {
  alert('I will run only when count changes')
}, [count])


// function updateCounter(){
//   counter = counter + 1
//   console.log(counter)
// }



  return (
    <div className='flex justify-center items-center h-screen flex-col'>
      <h1>Counter</h1>

      <div className='w-96 py-8 bg-slate-300 text-black flex justify-center items-center gap-6'>


      <button onClick={() => setCount(count + 1)}>+</button>

      {count}

      <button onClick={() => setCount(count -1)}>-</button>
      </div>


      <h1>Total Counter</h1>

      <div className='w-96 py-8 bg-slate-300 text-black flex justify-center items-center gap-6'>


      <button onClick={() => setTotalCount(totalCount + 1)}>+</button>

      {totalCount}

      <button onClick={() => setTotalCount(totalCount -1)}>-</button>
      </div>



    </div>
  )
}

export default Hooks
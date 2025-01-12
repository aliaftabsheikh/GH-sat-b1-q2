"use client"

import { useEffect, useRef, useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0)

  const [totalCount, setTotalCount] = useState(0)

  const [data, setData] = useState([])



   //first ==> side effect / ACTION
  //second ==> clean up
  //third ==> list of dependencies

//  useEffect(() => {
//    first
 
//    return () => {
//      second
//    }
//  }, [third])

let val = useRef(0)

function handleIncrement(){
  val.current = val.current + 1

  console.log("Your value is ", val.current)
  setCount(count + 1)
}


// variant -1 

// useEffect(() => {
//   alert('I will run on each runder')
// })  

// variant-2

// useEffect(() => {
//   alert('I will run only once')
// }, [])


// variant-3

// useEffect(() => {
//   alert('I will run when count is updated')
// }, [count])

// variant-4


// useEffect(() => {
//   alert('I will run when count is updated')
// }, [count, totalCount])


// variant-5

// useEffect(() => {
//   alert('I will run when count is updated')

//   return () => {
//     alert("Count is unmounted")
//   }

// }, [count])

// useEffect(() => {
//   const interval = setInterval(() => {
//     console.log("Time Started", totalCount)
//     setTotalCount((prev)=> prev + 1)
//   }, 1000)

//   return()=>{
//     console.log("Time to Stop !")
//     clearInterval(interval)
//   }
// }, [])


//CLIENT SIDE DATA FETCHING 

useEffect(()=>{
  async function fetchData(){
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')

    const res = await data.json()

    setData(res)
  }

  fetchData()
}, [])



  return (
<>
<div className='flex justify-center items-center flex-col'>
    <h1>Counter</h1>

    <div className='w-96 py-8 bg-slate-300 text-black flex justify-center items-center gap-6'>


    <button onClick={handleIncrement}>+</button>

    {count}

    <button onClick={() => setCount(count -1)}>-</button>
    </div>
    </div>


    <div className='flex justify-center items-center flex-col'></div>
    {/* 

    <h1>Total Counter</h1>

<div className='w-96 py-8 bg-slate-300 text-black flex justify-center items-center gap-6'>


<button onClick={() => setTotalCount(totalCount + 1)}>+</button>

{totalCount}

<button onClick={() => setTotalCount(totalCount -1)}>-</button>
</div>
</div> */}


{/* {
  data.map((item, index) => {
    return(
      <div key={index} className='flex justify-center items-center flex-col'>

      <h1>{item?.id}</h1>
      <p>{item?.title}</p>
      </div>
    )
  })
} */}
</>
  );
}

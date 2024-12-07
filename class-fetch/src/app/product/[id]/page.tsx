import React from 'react'

const page = async (props:{ params: {id: number }}) => {
  // console.log("props === ", props.params)
  const id = props.params.id;
  //const item = [].filter(item => item.id === props.params.id)
  // console.log("Props: ", props.params.id)
  const singleBookData = await fetch(`https://simple-books-api.glitch.me/books/${id}`)
  const jsonBookData = await singleBookData.json();
  console.log("SINGLE BOOK: ", jsonBookData);
  return (
    <div>
      <h1 className='font-bold text-2xl'>DYNAMIC ROUTE</h1>
      <h2>ID: {jsonBookData.id}</h2>
      <h2>NAME: {jsonBookData.name}</h2>
      <h2>AUTHOR: {jsonBookData.author}</h2>
      <h2>TYPE: {jsonBookData.type}</h2>
      <h2>PRICE: {jsonBookData.price}</h2>
      <h2>AVAILABLE: {jsonBookData.available ? "YES": "NO"}</h2>
      <h2>CURRENT STOCK: {jsonBookData["current-stock"]}</h2>
    </div>
  )
}

export default page
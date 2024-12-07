import InfoCard from "@/components/InfoCard";
import Link from "next/link";

const DummyData = [
  {
    name: "Product 1",
    id: 1,
    description: "This is a good product"
  },
  {
    name: "Product 2",
    id: 2,
    description: "This is a good product"
  },
  {
    name: "Product 3",
    id: 3,
    description: "This is a good product"
  },
  {
    name: "Product 4",
    id: 4,
    description: "This is a good product"
  },
  {
    name: "Product 5",
    id: 5,
    description: "This is a good product"
  },
  {
    name: "Product 6",
    id: 6,
    description: "This is a good product"
  },
]

export default async function Home() {
  const response = await fetch("https://simple-books-api.glitch.me/books")
  const booksData = await response.json()
  // console.log("BOOKS DATA: ", booksData);
  // for(let i = 0; i <= booksData.length; i++){
  //   console.log("name =", booksData[i].name)
  // }

  // const mappedBooks = booksData.map((item) => item.name)
  // console.log("BOOKS NAME MAP: ", mappedBooks)
  return (
    <div className="">
      <h1 className="text-xl font-bold">Simple Books Api</h1>
      {/* {DummyData.map((product, itemIndex) => {
        return(
          <div key={product.id}>
            <h1>ITEM INDEX: {itemIndex}</h1>
            <h1>Product Name: {product.name}</h1>
          </div>
        )
      })} */}
      {booksData.map((book, index: number) => {
        return(
          <Link href={`/product/${book.id}`}>
          <p>{book.name}</p>
          </Link>
        )
      })}
    </div>
  );
}

// passing props to components

{/* <InfoCard name="Ali" classDay="Saturday" role="Teacher"/>
      <InfoCard name="Bilal" classDay="Saturday" role="Teacher"/>
      <InfoCard name="Shafiq" classDay="Saturday" role="Student"/> */}

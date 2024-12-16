import { client } from "@/sanity/lib/client";

export default async function Home() {
  const query = `*[_type == "homePage"]{
  heading,
  paragraph,
  buttonText,
  image
}`

const sanityData = await client.fetch(query);

console.log("Sanity Data: ", sanityData);


  return (
    <div className="">
      <h1 className="font-bold text-2xl">Sanity</h1>
    </div>
  );
}

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";


export default async function Home() {
  const query = `*[_type == "homePage"][0]{
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
      <Image src={urlFor(sanityData.image).url()} alt="Sanity-Image" width={200} height={200} />
      <h2 className="font-bold text-xl">{sanityData.heading}</h2>
      <p>{sanityData.paragraph}</p>
      <button className="border-2 border-solid border-white">{sanityData.buttonText}</button>
    </div>
  );
}

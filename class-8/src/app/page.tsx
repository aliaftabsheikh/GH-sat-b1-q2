export default function Home() {
  return (
  // <div className="grid grid-cols-3 grid-rows-[200px_200px_200px] gap-3">
  //  <div className="bg-green-400 col-span-3">BOX-1</div>
  //  <div className="bg-green-400 row-span-2">BOX-2</div>
  //  <div className="bg-green-400 col-span-2 row-span-2">BOX-3</div>
  // </div>

  <div className="grid grid-rows-[100px_200px_200px_100px] grid-cols-3 gap-5">
    <div className="bg-purple-400 col-span-3 text-[36px] font-bold text-center content-center border-2 border-white">Header</div>
    <div className="bg-green-400 row-span-2 text-[36px] font-bold text-center content-center border-2 border-white">Sidebar</div>
    <div className="bg-blue-400 col-span-2 text-[36px] font-bold text-center content-center border-2 border-white">Content-1</div>
    <div className="bg-yellow-400 text-[36px] font-bold text-center content-center border-2 border-white">Content-2</div>
    <div className="bg-orange-400 text-[36px] font-bold text-center content-center border-2 border-white">Content-3</div>
    <div className="bg-pink-400 col-span-3 text-[36px] font-bold text-center content-center border-2 border-white">Footer</div>
  </div>



  );
}

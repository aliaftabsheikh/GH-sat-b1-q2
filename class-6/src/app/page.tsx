export default function Home() {
  return (
    <div className="bg-red h-screen flex items-center">
      <div className="flex flex-col gap-4 justify-center px-4 w-1/2 h-48">
      <h1 className="font-bold text-[44px]">Welcome To Our Website</h1>
      <p className="font-normal text-[32px]">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard
      </p>
      <button className="text-white w-[237px] h-[66px] p-4 bg-black">Contact US</button>
      </div>
      <div className="bg-purple-300 w-1/2 h-48"></div>
    </div>
  );
}

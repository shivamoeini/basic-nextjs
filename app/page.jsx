function Navbar(){
return(
  <div className="bg-rose-500 flex text-center box-border drop-shadow-md cursor-pointer ">
  <div className="p-5 bg-pink-800 w-96 h-150 text-lg"><p className="hover:text-pink-500">Home</p></div>
  <div className="p-5  bg-pink-800 w-96 h-150 text-lg"><p className="hover:text-pink-500">Products</p></div>
  <div className="p-5 bg-pink-800 w-96 h-150 text-lg"><p className="hover:text-pink-500">Contact</p></div>
  <div className="p-5 bg-pink-800 w-96 h-150  text-lg"><p className="hover:text-pink-500">About</p></div>
</div>
)
}

function Card(){
  return(
    <div className="">
      <div className="  rounded-lg flex justify-around flex-wrap">
        <div className="w-1/4 h-80 bg-green-500 rounded-lg m-2">1</div>
        <div className="w-1/4 h-80 bg-green-500 rounded-lg m-2">2</div>
        <div className="w-1/4 h-80 bg-green-500 rounded-lg m-2">3</div>
        <div className="w-1/4 h-80 bg-green-500 rounded-lg m-2">4</div>
        <div className="w-1/4 h-80 bg-green-500 rounded-lg m-2">5</div>
      </div>
    </div>
  );
}


const page = () => {
  return (
   <div>
    <Navbar/>
    <Card/>
   </div>
  );
}
export default page;
import "./App.css";
import product from "../src/images/image.jpg"


function App() {
  return (
    <div>
      <div class="w-[100%] bg-gray-500 mb-4 h-20">
          <div className="text-white p-2 text-center"> Hello </div>
        </div>
      <div className=" mx-auto bg-stone-400 rounded-lg p-10 py-2 border-orange-500 border-2 shadow-md w-max h-max z-20">
        <h1 className="text-white text-2xl font-bold font-serif mr-2">Title</h1>
        <h3 className="text-center md:text-left">Sub Title</h3>
        <img src={product} alt="No Image"
        className="object-fit h-60 rounded-l-lg hover:scale-90 duration-500 ease-in-out"/>
      </div>


      

      {/* <!-- Four columns --> */}
      {/* <div class="flex mb-4">
        <div class="w-1/4 bg-gray-500 h-12"></div>
        <div class="w-1/4 bg-gray-400 h-12"></div>
        <div class="w-1/4 bg-gray-500 h-12"></div>
        <div class="w-1/4 bg-gray-400 h-12"></div>
      </div> */}
    </div>
  );
}

export default App;

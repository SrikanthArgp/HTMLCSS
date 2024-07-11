import "./App.css";
import product from "../src/images/image.jpg";

function App() {
  return (
    <div className="bg-amber-200  max-h-full md:h-screen ">


      <div class=" bg-gray-500 rounded-lg shadow-2xl mx-auto w-max">
        <div className="text-white font-serif text-4xl p-4">
          Hello Java Script
        </div>
      </div>

      <div className="  mx-auto m-8 bg-stone-400 rounded-lg p-10 py-2 border-orange-500 border-2 
      shadow-md w-screen md:w-max h-max z-20">
        <h1 className="text-white text-2xl font-bold font-serif ">
          Title 1
        </h1>
        <h3 className="text-center md:text-left">Title 1</h3>
        <img
          src={product}
          alt="Not Available"
          className="object-fit h-80 rounded-l-lg hover:scale-90 duration-200 ease-in-out"
        />
      </div>

      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
       
        <div>Item 1 </div>
        <div>Item 2 </div>
        <div>Item 3 </div>
        <div>Item 4 </div>
      </div>


      <div className="mb-6"></div>


      <div className="sm:grid md:grid-cols-2 lg:grid-cols-3
      xl:grid-cols-4">
        <div className="text-center">Item 1 </div>
        <div className="text-center">Item 2 </div>
        <div className="text-center">Item 3 </div>
        <div className="text-center">Item 4 </div>
        <div className="text-center">Item 5 </div>
        <div className="text-center">Item 6 </div>
        <div className="text-center">Item 7 </div>
        <div className="text-center">Item 8 </div>
        <div className="text-center">Item 9 </div>
        <div className="text-center">Item 10 </div>
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

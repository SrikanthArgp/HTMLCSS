
import './App.css';

function App() {
  return (
    <div className=' bg-zinc-400 '>
    <div className="flex flex-col items-center justify-center min-h-screen ">
    <h1 className="bg-yellow-200 p-4 px-2 rounded-md text-4xl font-serif text-blue-600 border-violet-600 border-4 shadow-2xl   hover:rotate-45 duration-500 m-5">
      Hello Tailwind 😁 
    </h1>
    <h2>Next Element</h2>
    {/* <div className='container bg-slate-200 p-2'> */}
   
    {/* <div className='relative w-48 bg-red-400 h-48'>
    <div className='absolute w-20 bg-green-400 h-20 -top-4 -right-4 rounded-full'></div>
    </div> */}
<div className="flex relative">
    <div className='w-48 bg-red-400 h-48'></div>
    <div className='absolute w-20 bg-green-400 h-20  rounded-full -top-4 -right-4 flex justify-center items-center'>4</div>
    </div>
    
    
    
    
    {/* <div className='w-32 bg-violet-400 h-24 '></div> */}
    </div>
    </div>
    // </div>
  );
}

export default App;

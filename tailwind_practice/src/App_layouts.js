import "./App.css";

function App() {
  return (
    <div>
      <div class="w-[100%] bg-gray-500 mb-4 h-[15vh]">
        <div class="flex justify-center">
          <div className="text-white p-2"> Hello </div>
        </div>
      </div>

      {/* <!-- Two columns --> */}
      <div class="flex mb-4 h-[70vh] justify-center items-center">
        <div class=" w-1/2 bg-gray-400 break-normal mr-2">
          <div className="text-center p-3 ">
          <div className="font-extrabold text-2xl underline mb-2 text-violet-800">Left Section: </div>
          <div className="flex  bg-red-300">
          <p className="text-center">
            It was 7 minutes after midnight. The dog was lying on the grass in
            the middle of the lawn in front of Mrs Shears’ house. Its eyes were
            closed. It looked as if it was running on its side, the way dogs run
            when they think they are chasing a cat in a dream. But the dog was
            not running or asleep. The dog was dead. There was a garden fork
            sticking out of the dog. The points of the fork must have gone all
            the way through the dog and into the ground because the fork had not
            fallen over. I decided that the dog was probably killed with the
            fork because I could not see any other wounds in the dog and I do
            not think you would stick a garden fork into a dog after it had died
            for some other reason, like cancer for example, or a road accident.
            But I could not be certain about this.
          </p>
          </div>
          </div>
        </div>
        <div class="w-1/2 bg-gray-500 text-center">
          Right Section
          <p>
            It was 7 minutes after midnight. The dog was lying on the grass in
            the middle of the lawn in front of Mrs Shears’ house. Its eyes were
            closed. It looked as if it was running on its side, the way dogs run
            when they think they are chasing a cat in a dream. But the dog was
            not running or asleep. The dog was dead. There was a garden fork
            sticking out of the dog. The points of the fork must have gone all
            the way through the dog and into the ground because the fork had not
            fallen over. I decided that the dog was probably killed with the
            fork because I could not see any other wounds in the dog and I do
            not think you would stick a garden fork into a dog after it had died
            for some other reason, like cancer for example, or a road accident.
            But I could not be certain about this.
          </p>
        </div>
      </div>

      {/* <!-- Three columns --> */}
      <div class="flex mb-4 h-[10vh]  justify-between items-center m-2">
        <div class="w-1/3 bg-gray-400 text-center m-2 border-2 rounded-md p-1">
          Bottom Left
        </div>
        <div class="w-1/3  bg-gray-500 text-center m-2">Bottom Center</div>
        <div class="w-max bg-gray-600 text-center m-2 p-1 border-2
         border-red-300  rounded-md">
          Bottom Right
        </div>
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

import './App.css';

function App() {
  return (
    <div class="min-h-screen min-w-full bg-gray-100 text-gray-800 flex justify-center items-center">
      <div class="App flex-col">
        <div>
          <h1 class='text-3xl font-mono'>Personal Details</h1>
          <div class="border-b border-gray-800 mb-3"></div>
        </div>
        <div>
          <div>
            <div class="flex mb-2">
              <label for="titleInput" class="text-lg w-1/4 font-mono">Title</label>
              <select id="my-selector" class="text-lg w-1/4 text-right border border-gray-700 rounded p-0.5 font-mono">
                <option value="option1">Mr.</option>
                <option value="option2">Mrs.</option>
              </select>
              <div class="w-1/2"></div>
            </div>
            <div class="flex mb-2">
              <label for="fninput" class="text-lg w-1/4 font-mono">First Name</label>
              <input id="fninput" type="text" placeholder='Eg. John'
                class="text-lg w-1/4 mr-2 border border-gray-700 rounded p-0.5 font-mono"></input>

              <label for="fninput" class="text-lg w-1/4 font-mono">Middle Name</label>
              <input id="fninput" class="text-lg w-1/4 border border-gray-700 rounded p-0.5 font-mono" type="text"
                placeholder='Eg. Crow'></input>
            </div>

            <div class="flex">
              <label for="fninput" class="text-lg w-1/4 font-mono">Last Name</label>
              <input id="fninput" class="text-lg w-1/4 mr-2 border border-gray-700 rounded p-0.5 font-mono" type="text"
                placeholder='Eg. John'></input>

              <label for="fninput" class="text-lg w-1/4 font-mono">Suffix</label>
              <select id="my-select" class="text-lg w-1/4 text-right border border-gray-700 rounded p-0.5 font-mono">
                <option value="option1">Mr.</option>
                <option value="option2">Mrs.</option>
              </select>
            </div>
          </div>
          <div class="mt-8">
            <h1 class='text-3xl font-mono'>Contact Details</h1>
            <div class="border-b border-gray-800 mb-3"></div>
          </div>

          <div class="flex mb-2">
            <label for="fninput" class="text-lg w-1/4 font-mono">Email</label>
            <input id="fninput" type="email" placeholder='john.cash@em.com'
              class="text-lg w-1/4 mr-2 border border-gray-700 rounded p-0.5 font-mono"></input>

            <label for="fninput" class="text-lg w-1/4 font-mono">Phone</label>
            <input id="fninput" inputmode="numeric" pattern="[0-9]*" class="text-lg w-1/4 border border-gray-700 rounded p-0.5 font-mono" type="text"
              placeholder='1234567890'></input>
          </div>

          <div class="mt-8 flex justify-center">
            <button class="px-3 py-1.5 bg-sky-500 leading-6 rounded-md font-mono w-4/5">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

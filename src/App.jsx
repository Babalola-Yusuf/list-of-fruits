import { useState } from 'react';

function App() {
  const [fruits, setFruits] = useState(["apple", "pineapple", "orange"]);
  const fruitInput = document.getElementById("fruitInput");
  const handleAddFruit=()=>{
    setFruits([...fruits, document.getElementById("fruitInput").value])
  }
  const handleRemoveFruit=(index)=>{
setFruits(fruits.filter((_,i) => i !== index))
  }
  return (
    <div className=' text-center flex flex-col items-center mt-10 bg-base p-4 w-96 rounded-md border-main border-6'>
      <h1 className='text-6xl mb-4 text-main'>List of fruits</h1>
      <ul>
        {fruits.map((fruit, index)=> 
        <li key={index} onClick={()=> handleRemoveFruit(index)}>
          {fruit} 
        </li>)}
      </ul>
      <div className='flex gap-2 mt-4'>
        <input type="text" id='fruitInput' placeholder='input fruit' className=' border-2 p-2 rounded-md  border-main outline-none focus:border-darkPink focus:text-softPurple'/>
        <button onClick={handleAddFruit} className='border-2 p-2 rounded-md hover:border-darkPink bg-main text-white hover:bg-darkPink'>Add fruit</button>
      </div>

      
    </div>
  );
}

export default App;

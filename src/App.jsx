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
    <div className=' text-center flex flex-col items-center mt-10'>
      <h1 className='text-6xl mb-4'>List of fruits</h1>
      <ul>
        {fruits.map((fruit, index)=> 
        <li key={index} onClick={()=> handleRemoveFruit(index)}>
          {fruit} 
        </li>)}
      </ul>
      <div className='flex gap-2 mt-4'>
        <input type="text" id='fruitInput' placeholder='input fruit' className=' border-2 p-2 rounded-md'/>
        <button onClick={handleAddFruit} className='border-2 p-2 rounded-md'>Add fruit</button>
      </div>

      
    </div>
  );
}

export default App;

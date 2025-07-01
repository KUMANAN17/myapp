 "use client";
 import React from 'react'
import Header from '../common/Header';
 
const Homepage = () => { 
const name = "Kumanan";

const [count, setCount] = React.useState(0);
  const handleincrement = () => {
    setCount(prevCount => prevCount + 1);
    console.log(count);
  }

  return (
    <div className="m-4">
<Header username={name} />

<div className='m-8'>
  <h1 className="text-5xl font-semibold">
    {count}
  </h1>
    <button onClick={handleincrement} className='bg-green-500 text-white py-2 px-4 rounded-4xl' >+</button>

</div>
    </div>
  );
};

 export default Homepage;
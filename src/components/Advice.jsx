import React, { useEffect, useState } from 'react'
import {mobile, desktop, iconDice} from "../assets/images"

function Advice() {

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice")
    const { slip } = await response.json();

    console.log(slip);
    setAdvice(slip.advice)
    setId(slip.id)
  }

  const [advice, setAdvice] = useState("It's easy to sit up and take notice, what's difficult is getting up and taking action.");
  const [id, setId] = useState("117");

  return ( 
    <div className='bg-neutral-d-blue flex flex-col items-center rounded-lg py-12 max-w-lg relative px-6'>
      <p className='text-primary-neon-green font-normal uppercase text-[10px] tracking-[4px] mb-6'>advice #{id}</p>
      <div className='text-white text-3xl text-center mb-5'>
        "{advice}"
      </div>
      <img src={mobile} alt="separator"/>

      <div
        onClick={() => getAdvice()} 
        className='bg-primary-neon-green rounded-full h-16 w-16 flex justify-center items-center absolute -bottom-8 shadow-surround hover:shadow-primary-neon-green cursor-pointer'>
        <img src={iconDice} alt="icon-dice" className='flex-none'/>
      </div>
    </div>
  );
}

export default Advice;
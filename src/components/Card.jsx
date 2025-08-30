import React from 'react'
import { useDispatch } from 'react-redux';
import { TbMichelinStarGreen } from "react-icons/tb";
import { GiChickenOven } from "react-icons/gi";
import image1 from "../assets/image1.avif";
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';
function Card({name,image,id,price,type}) {
  let dispatch=useDispatch()
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-400'>
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
    <img src={image} alt="" className='object-cover'/>
      </div>
      <div className='text-2xl font-semibold'>
       {name}
      </div>
      <div className='w-full flex justify-between items-center'>
     <div className='text-lg font-bold text-green-500'>Rs {price}/-</div>
     <div className='flex justify-center items-center gap-2 text-green-500 text-lg font-semibold'>{type==="veg"?<TbMichelinStarGreen/>:<GiChickenOven/>}<span>{type}</span></div>
      </div>
      <button className='w-full p-3 rounded-lg bg-green-300 text-white hover:bg-green-400 transition-all' onClick={()=>{dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1}));
      toast.success("item added to cart")}
    }>Add to dish</button>
    </div>
  )
}

export default Card

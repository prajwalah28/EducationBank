import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import CircleIcon from '@mui/icons-material/Circle';
import { RiArrowDropDownLine } from "react-icons/ri";
export default function Instructor() {
  return (
   <><div className='px-24 mb-8'>
    <div className='font-inter text-4xl font-semibold leading-tight text-left '>
      Instructor
    </div>
    <div className='font-inter text-4xl font-semibold text-orange-500  mb-4'>Jay Kashikar
    </div>
    <div className='border-b-2 w-44 border-solid border-black -mt-2'>
    </div>
    <div className='text-gray-300 '>
    Head of Data science at NgpIT Training
        </div>
        <div className='flex items-center gap-10 mb-4'>
        <div className='rounded-full  w-28 h-28 bg-orange-500 mt-4 ml-4 mr-4'></div>
        <div className='font-inter text-lg text-blue-900'> 
        <p>4.6 Instructor Rating</p>
        <p>1,15,589 Reviews</p>
        <p>3,25,899 Students</p>
        <p>10 Courses</p>
        </div>
        </div>
       <div> <p>Jay Kashikar has a BS and MS in Mechanical Engineering from MIT University and years of experience as a <br></br>
professional instructor and trainer for Data Science, Machine Learning and Python Programming. He has publications and patents...</p>
<div className='flex text-orange-500'>
<p className='text-lg'>See more </p>

<RiArrowDropDownLine size={35} /></div>
<div className='flex flex-row gap-10'>
  <div className='flex flex-row text-2xl gap-4 font-bold'>
    <div className='text-orange-500'><StarIcon /></div>
    <div><h1>4.6 Course Rating</h1></div>
  </div>

  <div className='flex flex-row text-2xl gap-4 font-bold'>
    <div className='text-orange-500'><CircleIcon/></div>
    <div><h1>502K Ratings</h1></div>
  </div>
</div>

</div>
    </div>
   </>
  )
}
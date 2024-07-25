
import React from 'react'
import { CiFilter } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";

const admin = () => {
  return (
    <div className="flex gap-4">
    <button className="flex hover:bg-gray-300 px-4 py-2 rounded-md bg-gray-200 gap-1 border border-gray-300">
    <CiFilter size={20} className='mt-0.5'/> 
    <span className="hidden sm:inline-block">Filter</span>
    </button>
    
    <button className="flex hover:bg-gray-300 px-4 py-2 rounded-md bg-gray-200 gap-1.5 border border-gray-300">
      <IoGridOutline size={18} className='mt-0.5'/>
      <span className="hidden sm:inline-block">Grid View</span>
    </button>
  </div>
  )
}

export default admin
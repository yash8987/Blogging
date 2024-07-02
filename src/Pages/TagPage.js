import React from 'react'
import Header from '../Components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../Components/Pagination';
import Blogs from '../Components/Blogs';

const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div className='mt-[70px] flex justify-center gap-5'>
        <button onClick={()=> navigate(-1)}
          className='text-xl border-[2px] border-blue-400 p-[3px] rounded-lg'
        >
          Back
        </button>
        <h2 className='mt-[4px] text-xl font-bold'>
          Blogs Tagged <span>#{tag}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  )
}

export default TagPage

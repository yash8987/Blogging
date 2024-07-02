import React, { useContext } from 'react'
import {AppContext} from "../Context/AppContext";

const Pagination = () => {

  const {totalPages,page,handlePageChange} = useContext(AppContext);

  return (
    <div className='w-full border-[2px] border-x-black fixed bottom-0 bg-white'>
      <div className='flex justify-evenly p-2'>
        { page > 1 &&
          <button className='text-xl border-[2px] p-[3px] rounded-lg' onClick={()=>{handlePageChange(page-1)}}>Previous</button>
        }
        { page<totalPages &&
          <button className='text-xl border-[2px] p-[3px] rounded-lg' onClick={()=>{handlePageChange(page+1)}}>Next</button>
        }
        <p>
          page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination

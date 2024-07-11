import React from 'react'
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";

const Home = () => {
  return (
    <div>
      <Header />
      <div className='mt-20 flex justify-center items-center'>
        <Blogs />
      </div>
      <Pagination />
    </div>
  )
}

export default Home

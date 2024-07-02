import React from 'react'
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";

const Home = () => {
  return (
    <div>
      <Header />
      <div className='my-[70px]'>
        <Blogs />
      </div>
      <Pagination />
    </div>
  )
}

export default Home

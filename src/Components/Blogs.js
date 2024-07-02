import React, { useContext } from 'react';
import Spinner from "./Spinner";
import {AppContext} from "../Context/AppContext";
import BlogDetails from './BlogDetails';

const Blogs = () => {

  const {posts,loading} = useContext(AppContext);

  return (
    <div className='w-[40%] m-auto mb-[70px]'>
      {
        loading ? (<Spinner />) : (
          posts.length === 0 ? 
          (
            <div>
              <p>No Post Found</p>
            </div>
          )
          :
          (
            posts.map((post) =>(
              <BlogDetails key={post.id} post={post}/>
            ))
          )
        )
      }
    </div>
  )
}

export default Blogs

import React, { useContext } from 'react';
import Spinner from "./Spinner";
import {AppContext} from "../Context/AppContext";
import BlogDetails from './BlogDetails';

const Blogs = () => {

  const {posts,loading} = useContext(AppContext);

  return (
    <div className='w-[100vw] min-h-[100vh] bg-slate-200'>
      <div className='w-screen sm:w-[50vw] m-auto mb-[70px]'>
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
    </div>
  )
}

export default Blogs

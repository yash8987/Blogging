import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogDetails = ({post}) => {
  return (
    <div className='border-[3px] border-red-500 m-[10px] p-[10px] rounded-lg'>
      <NavLink to={`/blog/${post.id}`}>
        <span className='font-bold text-xl underline'>{post.title}</span>
      </NavLink>
      <div className='my-[5px]'>
        <p>
          By
          <span>{post.author}</span>
          on {" "}
          <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='underline'>{post.category}</span>
          </NavLink>
        </p>
        <p>Posted on {post.date}</p>
      </div>
      <p className='mb-[7px]'>{post.content}</p>
      <div>
        {
          post.tags.map((tag,index)=>(
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
              <span className='underline text-blue-900 m-[3px]'>{`#${tag}`}</span>
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default BlogDetails

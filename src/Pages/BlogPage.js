import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import Header from '../Components/Header';
import Spinner from '../Components/Spinner';
import BlogDetails from "../Components/BlogDetails";

const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog,setBlog] = useState(null);
  const [relatedBlogs,setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const {setLoading , loading} = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs(){
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try{
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch(error){
      console.log("Data Fetching Failed");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    if(blogId){
      fetchRelatedBlogs();
    }
  },[location.pathname])

  return (
    <div>
      <Header />
      <div className='mt-[70px] flex justify-center gap-3'>
        <button
          onClick={()=>navigation(-1)}
          className='text-xl border-[2px] border-blue-400 p-[3px] rounded-lg'
        >
          Back
        </button>
      </div>
      <div className='w-screen sm:w-[50vw] m-auto mb-[70px]'>
        {
          loading ? (<Spinner />) : 
          (
            blog ? 
            (
              <div>
                <BlogDetails post={blog} />
                <h2 className='font-bold text-3xl text-center'>Related Blogs</h2>
                {
                  relatedBlogs.map((post)=>{
                    return <BlogDetails key={post.id} post={post} />
                  })
                }
              </div>
            ) :
            (<div className='text-center mt-[50px] text-3xl font-bold'>No Blog Found</div>)
          )
        }
      </div>
    </div>
  )
}

export default BlogPage

import './App.css';
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";
import TagPage from "./Pages/TagPage";
import { useContext, useEffect } from 'react';
import { AppContext } from './Context/AppContext';
import {Routes,Route, useLocation, useSearchParams} from "react-router-dom";

function App() {

  const {fetchBlogPosts} = useContext(AppContext);
  const location = useLocation();
  const [searchParams,setSearchParams] = useSearchParams();

  useEffect(()=>{
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag,null);
    }
    else if (location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname,location.search]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/categories/:category" element={<CategoryPage />}></Route>
        <Route path="/tags/:tag" element={<TagPage />}></Route>
        <Route path="/blog/:blogId" element={<BlogPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

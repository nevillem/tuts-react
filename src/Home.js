import { useState,useEffect } from "react";
import BlogIist from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
    const {data:blogs, isPending,error}=useFetch('http://localhost:8000/blogs');

    return ( 
<div className="home">
        {error && <div> {error}</div>}
        {isPending && <div> Loading... </div>}
        {blogs && <BlogIist blogs={blogs} title="All blogs"></BlogIist>}
        {/* <button onClick={()=>setName('Luigi')}>Click me</button> */}
        {/* <p>{name}</p> */}
        {/* <BlogIist blogs={blogs.filter((blog)=>blog.author==='Mario')}/> */}
        </div>
    );
}
 
export default Home;
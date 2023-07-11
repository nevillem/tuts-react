import { useState,useEffect } from "react";
import BlogIist from "./bloglist";

const Home = () => {
    const [blogs, setBlog]=useState([
        {title:"my new website",body:"lorem ispum",author:"Mario", id:1},
        {title:"Welcome party",body:"lorem ispum",author:"Yoshi", id:2},
        {title:"web development toop tips",body:"lorem ispum",author:"Mario", id:3}
    ])
    const [name, setName]=useState('Mario')
    const handleDelete=(id)=>{
        console.log("hello" + id);
        const newBlogs=  blogs.filter(blog=> blog.id !==  id);
        setBlog(newBlogs);
    }
    useEffect(()=>{
    console.log(name);
    },[name]);
    /*
    const [age, setAge]=useState('25')
    const handleClick=()=>{
        setName('Luigi')
        setAge('30')
    }
    const handleClickAgain=(name, e)=>{
        console.log("hello," + name , e.target);
    }*/
    return ( 
//     <div className="home">
//    <BlogIist blogs={blog} title="All blogs"></BlogIist>
//         <h2>Homepage</h2>
//         <p>{name} is {age} years old</p>
//         <button onClick={(e)=>
//             handleClickAgain("mario", e)
//         }>Click me again</button>
//         </div>
<div className="home">
        <BlogIist blogs={blogs} title="All blogs" handleDelete={handleDelete}></BlogIist>
        <button onClick={()=>setName('Luigi')}>Click me</button>
        <p>{name}</p>
        {/* <BlogIist blogs={blogs.filter((blog)=>blog.author==='Mario')}/> */}
        </div>
    );
}
 
export default Home;
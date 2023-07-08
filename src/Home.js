import { useState } from "react";
import BlogIist from "./bloglist";

const Home = () => {
    const [blog, setBlog]=useState([
        {title:"my new website",body:"lorem ispum",author:"Mario", id:1},
        {title:"Welcome party",body:"lorem ispum",author:"Yoshi", id:2},
        {title:"web development toop tips",body:"lorem ispum",author:"Mario", id:3}
    ])
    const [name, setName]=useState('Mario')
    const [age, setAge]=useState('25')
    const handleClick=()=>{
        setName('Luigi')
        setAge('30')
    }
    const handleClickAgain=(name, e)=>{
        console.log("hello," + name , e.target);
    }
    return ( 
    <div className="home">
   <BlogIist blogs={blog} title="All blogs"></BlogIist>
        <h2>Homepage</h2>
        <p>{name} is {age} years old</p>
        <button onClick={handleClick}>Click me</button>
        <button onClick={(e)=>
            handleClickAgain("mario", e)
        }>Click me again</button>
        </div>
    );
}
 
export default Home;
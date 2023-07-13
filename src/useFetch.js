import { useState,useEffect } from "react";
const useFetch = (url) => {
    const [data, setData]=useState(null);
    const [isPending, setIsPending]=useState(true);
    const [error, setError]=useState(null);

useEffect(()=>{
    const abortCont= new AbortController();
    setTimeout(()=>{
        fetch(url, {signal:abortCont.signal}).then(res=>{
            if(!res.ok){
                throw Error('could not feth data for that resource');
            }
            return res.json();
            }).then(data=>{
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
     }).catch((err)=>{
    //  console.log(err.message)
    if (err.name==='AbortError') {
         console.log('fetch aborted');
        
    }else{
    setIsPending(false);
     setError(err.message);
    }
     })           
    },1000);
    //this is used to stop updating the previous state in a component e.g if a user chane a page before the previous loaded
    // useEffect Cleanup
    return ()=>abortCont.abort();
},[url]);
return{data, error, isPending};
}
export default useFetch;
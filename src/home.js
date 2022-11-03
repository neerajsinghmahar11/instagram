import { navbar } from "../components/navbar.js";

import { append } from "../components/append.js";



let nav=document.getElementById("navbar");
nav.innerHTML=navbar();


let post_div=document.getElementById("posts");

const getdata=async()=>{
    let res=await fetch(`https://glacial-eyrie-24074.herokuapp.com/posts`);
    let data=await res.json();
    append(data,post_div);  
}
getdata();
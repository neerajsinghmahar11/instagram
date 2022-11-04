import { navbar } from "../components/navbar.js";

import { append } from "../components/append.js";



let nav=document.getElementById("navbar");
nav.innerHTML=navbar();


let post_div=document.getElementById("posts");

const getdata=async()=>{
    let res=await fetch(`https://glacial-eyrie-24074.herokuapp.com/posts`);
    let data=await res.json();  
    createButton(data.length,2)
}
getdata();
const getPaginatedData=async(clicked_button,limit)=>{
    let res=await fetch(`https://glacial-eyrie-24074.herokuapp.com/posts?_page=${clicked_button}&_limit=${limit}`);
    let data=await res.json();
    append(data,post_div);
}
getPaginatedData(1,2);

let buttons_div=document.getElementById("buttons");
const createButton=(total_images,image_per_page)=>{
    const buttons=Math.ceil(total_images/image_per_page);

    for(let i=1;i<=buttons;i++){
        let btn=document.createElement("button");

        btn.id=i;
        btn.innerText=i;
        btn.onclick=()=>{
            getPaginatedData(i,2);
        };

        buttons_div.append(btn);
    };
};
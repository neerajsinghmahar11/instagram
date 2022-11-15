import { navbar } from "../components/navbar.js";

let nav=document.getElementById("navbar");
nav.innerHTML=navbar();

let data=JSON.parse(localStorage.getItem("delData"))||[];

const append=(data,container)=>{
    
    
    container.innerHTML= null;
    
    data.forEach(({id,caption,image_url},i)=>{
        
        let div=document.createElement("div");
        let caption_p=document.createElement("p");
        caption_p.innerHTML=caption;

        
        let image=document.createElement("img");
        image.src=image_url;
        
        let btn=document.createElement("button");
        btn.innerText="Retrieve";
        btn.onclick=()=>{
            dataRetrieve(id,caption,image_url,i);
        }
        div.append(image,caption_p,btn);
        container.append(div);
        
    });
    
    
};

let delData=document.getElementById("deletedItems");
append(data,delData);


const dataRetrieve=async(id,caption,image_url,i)=>{

    let send_this_data={
        id,
        caption,
        image_url,
    };
    let res= await fetch(`https://glacial-eyrie-24074.herokuapp.com/posts`,{
        method:'POST',
        body:JSON.stringify(send_this_data),
        headers:{
            "content-type":"application/json",
        },
    });
    
    data.splice(i,1);
    localStorage.setItem("delData",JSON.stringify(data));
    window.location.reload();
}



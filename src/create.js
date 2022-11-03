import { navbar } from "../components/navbar.js";

let nav=document.getElementById("navbar");
nav.innerHTML=navbar();


let createButton=document.getElementById("create_button");

createButton.onclick=()=>{
    createpost();
}

let delete_btn=document.getElementById("delete_btn");
delete_btn.onclick=()=>{
    deletepost();
}

let update_btn= document.getElementById("update_btn");

update_btn.onclick=()=>{
    UpdatePost();
}

let disBtn=document.getElementById("create_button");
disBtn.disabled=true;

let inp_img=document.getElementById("image");
inp_img.onchange=()=>{
    handleImage();
}
let image_url;
const handleImage=async()=>{
    let img=document.getElementById("image");

    let actualImage=img.files[0];

    let form= new FormData();
    form.append("image",actualImage);


    let res= await fetch(`https://api.imgbb.com/1/upload?key=9a0087fec906d3331a3ae743b583860e`,{
        method:"POST",
        body:form,
    });
    let data =await res.json();
    console.log("data:",data);
    image_url=data.data.display_url;


    if(data!=null){
        disBtn.disabled=false;
    }
}



const createpost=async()=>{

    let id=document.getElementById("id").value;
    let caption=document.getElementById("caption").value;

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

    let data=await res.json();
    console.log("data",data);
}


const deletepost=async()=>{
    let del_id=document.getElementById("deleteId").value;

    let res=await fetch(`https://glacial-eyrie-24074.herokuapp.com/posts/${del_id}`,{
        method:"DELETE",
        headers:{
            "content-Type":"application/json",
        },
    });
    let data=await res.json();
    console.log(data);

}


const UpdatePost= async()=>{
    let update_id= document.getElementById("update_id").value;
    let new_caption=document.getElementById("update_caption").value;




    let send_this_data={
    
        caption:new_caption,
    };

    try{
        
        let res= await fetch(`https://glacial-eyrie-24074.herokuapp.com/posts/${update_id}`, {
        method:'PATCH',

        body:JSON.stringify(send_this_data),

        headers:{
            'content-type': 'application/json',
        },

    });
    
    let data=await res.json();
    console.log(data);



    }catch(error){
        console.log(error);
    }
    
}
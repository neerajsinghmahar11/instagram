const navbar=()=> {
    return ` <div id="logo">
    <a href='./index.html'> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" alt="" /></a>
   </div>
   <div id="search">
   <input type='text'/> 
 </div>
 
   <div id="options">
     <a href="/create.html"><button id='submit_btn'><a href="./create.html">Create Post</a></button></a>
     <a href="/create.html"><button id='Recycle'><a href="./recyclebin.html">Recycle Bin</a></button></a>
   </div>`
};

export { navbar };
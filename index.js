
const radioBlue = document.getElementById ("customize")
const isLightblue = false

radioBlue.addEventListener("click", function (){
 document.body.classList.toggle("customize");
 document.body.classList.remove ("produce","simplify","logOut")
  
});

const radioPink = document.getElementById ("produce")
const isLightpink = false

radioPink.addEventListener("click", function (){
 document.body.classList.toggle("produce");
 document.body.classList.remove ("customize","simplify","logOut")
 
});

const radioGreen = document.getElementById ("simplify")
const isLightseagreen = false

radioGreen.addEventListener("click", function (){
 document.body.classList.toggle("simplify");
 document.body.classList.remove ("customize","produce","logOut")
 
});

const radioYellow = document.getElementById ("logOut")
const isLightyellow = false

radioYellow.addEventListener("click", function (){
 document.body.classList.toggle("logOut");
 document.body.classList.remove ("customize","produce","simplify")

});


 /*(toggle === false) {
    getSidebarUl.style.visbilty = "visible";
    getSidebar.style.witdth = "272px";
    getSidebarTitle.style.opacity = "1";
    
        let arrayLength= getSidebarLinks.length;
        console.log (arrayLength);
        for (let i=0; i <arrayLength; i++){
          getSidebarLinks[i].style.opacity = "1";
        }
        toggle =true;
      
    }else{
    getSidebar.style.width ="50px";
    getSidebarTitle.style.opacity ="0";
    let arrayLength= getSidebarLinks.length;
    
        for (let i=0; i< arrayLength; i++ ){
          getSidebarLinks[i].style.opacity ="0";
    
    }
    getSidebarUl.style.visibilty="hidden";
    toggle = false
    }
    
    
    toggle ()*/





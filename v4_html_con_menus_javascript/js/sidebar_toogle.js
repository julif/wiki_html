
  if ( localStorage.julifproyect_sidebar_status == null || localStorage.julifproyect_sidebar_status == "open") {
    openNav();
 }

else{
  //para hacer que la app se mobile voy a tener que cambiar los padings y widths por clases deonde esten incluidas las cuales puedo controlar con media-query para que no aparezcan en movile
 // closeNav();
 console.log(localStorage.julifproyect_sidebar_status);
 
 var x = document.getElementsByClassName("sidebar_link_title");
 //var i;for (i = 0; i < x.length; i++) {x[i].style.display = "none";}
 var i;for (i = 0; i < x.length; i++) {x[i].style.opacity = "0";}

 document.getElementById("sidebar").style.width = "65px";
 document.getElementById("sidebar").style.transition = "all 0s ease 0s";
 document.getElementById("main").style.paddingLeft = "65px";
 document.getElementById("main").style.transition = "all 0s ease 0s";
 document.getElementById("open_nav").style.display = "inherit";
 document.getElementById("close_nav").style.display = "none";
};
     /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
 function openNav() {
   document.getElementById("sidebar").style.width = "260px";
   document.getElementById("sidebar").style.transition = " width .3s cubic-bezier(.2,.3,.25,.9) 0s";
   document.getElementById("main").style.paddingLeft = "260px";
   document.getElementById("main").style.transition = "all 0.4s ease 0s";
   document.getElementById("open_nav").style.display = "none";
   document.getElementById("close_nav").style.display = "inherit";

  
   var x = document.getElementsByClassName("sidebar_link_title");
   //var i;for (i = 0; i < x.length; i++) {x[i].style.display = "contents";}
   var i; for (i = 0; i < x.length; i++) {x[i].style.opacity = "100";}

   localStorage.julifproyect_sidebar_status = "open";
   console.log(localStorage.julifproyect_sidebar_status);
 }
 
 /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
 function closeNav() {
   document.getElementById("sidebar").style.width = "65px";
   document.getElementById("sidebar").style.transition = " width .3s cubic-bezier(.2,.3,.25,.9) 0s";

   document.getElementById("main").style.paddingLeft = "65px";
   document.getElementById("main").style.transition = "all 0.1s ease 0s";
   
   document.getElementById("open_nav").style.display = "inherit";
   document.getElementById("close_nav").style.display = "none";
 
 
 
 
 
   var x = document.getElementsByClassName("sidebar_link_title");
   //var i;for (i = 0; i < x.length; i++) {x[i].style.display = "none";}
   var i;for (i = 0; i < x.length; i++) {x[i].style.opacity = "0";}
 
   localStorage.julifproyect_sidebar_status = "closed";
    console.log(localStorage.julifproyect_sidebar_status);

 
 }
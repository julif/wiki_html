function openmobileNav() {
  // document.getElementById("mobile_sidebar").style.transition = "all 0s ease 0s";
  document.getElementById("mobile_sidebar").style.height = "auto";
  document.getElementById("open_mobile_nav").style.display = "none";
   document.getElementById("close_mobile_nav").style.display = "inherit";
  }

  function closemobileNav() {
  // document.getElementById("mobile_sidebar").style.transition = "all 0s ease 0s";
  document.getElementById("mobile_sidebar").style.height = "0px";
  document.getElementById("open_mobile_nav").style.display = "inherit";
   document.getElementById("close_mobile_nav").style.display = "none";
  }
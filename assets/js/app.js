function scroll (event){
  var scroll=window.pageYOffset || document.body.scrollTop;
  console.log(scroll);
  if(scroll<553){
    $('#mi').addClass("active");
  }else{
    $('#mi').removeClass("active");
  }
  if(scroll>552 && scroll<1121 ){
    $('#trabajo').addClass("active");
    $('#mi').removeClass("active");
  }else{
    $('#trabajo').removeClass("active");
  }
  if(scroll>1120){
    $('#contactame').addClass("active");
    $('#trabajo').removeClass("active");
  }else{
    $('#contactame').removeClass("active");
  }
}


window.addEventListener("scroll",scroll);

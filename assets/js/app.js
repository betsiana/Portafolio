$('#mi').on('click', function(){
  $('#mi').addClass("active");
  $('#trabajo').removeClass("active");
  $('#contacto').removeClass("active");
});
$('#contacto').on('click', function(){
  $('#contacto').addClass("active");
  $('#trabajo').removeClass("active");
  $('#mi').removeClass("active");
});
$('#trabajo').on('click', function(){
  // $('.trabajos . titulo h3').addClass("fadeInUp");
  $('#trabajo').addClass("active");
  $('#mi').removeClass("active");
  $('#contacto').removeClass("active");
});

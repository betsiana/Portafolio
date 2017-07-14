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
  $('#trabajo').addClass("active");
  $('#mi').removeClass("active");
  $('#contacto').removeClass("active");
});

function flash (idPadre, elementoHijo){
  idPadre.hover(function(){
    elementoHijo.addClass('flash');
    }, function(){
      elementoHijo.removeClass('flash');
    });
}
var obj = [1,2,3,4,5,6,7,8];
$.each( obj, function( i, val ) {
  flash($( "#btn" + i ), $('#btn'+ i+' '+'span')) ;
});

function pulse (id, imagen){
  id.hover(function(){
    imagen.addClass('pulse');
    imagen.addClass('animated');
    }, function(){
      imagen.removeClass('pulse');
      imagen.removeClass('animated');
    });
}
var grupoImagen = [1,2,3,4,5,6,7,8,9,10,11];
$.each( grupoImagen, function( i, val ) {
  pulse($( "#icon" + i ), $('#icon'+ i+' '+'img')) ;
});

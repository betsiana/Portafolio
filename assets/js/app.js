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

// $(function(){
//      $('a[href*=#]').click(function() {
//      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
//          && location.hostname == this.hostname) {
//             var $target = $(this.hash);
//              $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
//              if ($target.length) {
//                 var targetOffset = $target.offset().top;
//                  $('html,body').animate({scrollTop: targetOffset}, 1000);
//                return false;
//             }
//        }
//    });
// });

$(document).ready(main);
var cont = 1;
function main(){
	$('.barra-menu').click(function(){
		if(cont == 1){
			$('nav').animate({
				left: '0'
			});
			cont = 0;
		} else {
			cont = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
};

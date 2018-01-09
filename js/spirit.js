
// init Isotope
var $grid = $('.grid').isotope({
  // options
});
$(document).ready(function() {
   $grid.isotope({ filter: '*' });
});
// $(window).load(function(){
// 	$grid.isotope({ filter: '*' });
// });
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
$(document).ready(function() {
  //fetch hash in a variable
  var hash = location.hash;
  if (hash) {
    //collapse menu
    $(hash).collapse('show');
    //collapse submenu
    $(hash).parents('.collapse').addClass('in');
  }
  
  /* active main menu */
  $('#sidebar ul li a[href^="' + hash + '"]').parent().addClass('active');

  /* fetch path without hash */
  var full_path = location.href.split("#")[0];
  /* add active class to links */
  $("#sidebar ul ul a").each(function() {
    var $this = $(this);
    if ($this.prop("href").split("#")[0] == full_path) {
      $(this).parent().addClass("active");
    }
  });
  
  /* add active class to sub links */
  $('#sidebar ul li a').filter(function() {
    return this.href == hash;
  }).parent().addClass('active').parent().parent().addClass('active');

});

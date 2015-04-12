(function() {
  var body = document.body;

  var toggler = document.getElementById('toggler');
  var menu = document.querySelector(".menu__list");
  var menuWrap = document.querySelector(".menu");
  toggler.addEventListener("tap", function(e) {
    e.preventDefault();
    toggler.classList.toggle('menu_btn--close');
    menu.classList.toggle('active');
    menuWrap.classList.toggle('active');
  });

})();

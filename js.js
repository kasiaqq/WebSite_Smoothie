$(document).ready(function () {

	// PŁYNNE PRZEJSCIE DO SEKCJI PO KLIKNIECIU W LINK (U MNIE W LOGO)
	/*  $(document).on('click', 'a', function (event) {
		if (this.hash !== "") {
		  event.preventDefault();
		  var hash = this.hash;
	  	$('body').animate({
	  		scrollTop: $(hash).offset().top
	  	}, 500, function(){
			  window.location.hash = hash;
		  });
		}
	  }); */

	// MENU
	$("#menu").click(openMenu);
	$("#close").click(closeMenu);

	function openMenu() {
		$("#menuSlide").toggleClass("open");
		$("#menu").addClass("invisible");
		$("#close").removeClass("invisible");
		$(".menuText").removeClass("invisible");
	}
	function closeMenu() {
		$("#menuSlide").toggleClass("open");
		$("#menu").removeClass("invisible");
		$("#close").addClass("invisible");
		$(".menuText").addClass("invisible");
	}
	// PAGE 1
	$("#page1").ready(function () {
		$("#check").addClass("checked");
	})

	// ANIMACJA
	AOS.init();

});

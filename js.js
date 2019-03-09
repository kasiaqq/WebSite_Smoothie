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
		$("#menuSlide").css({ "width": "20%" });
		$("#menu").addClass("invisible");
		$("#close").removeClass("invisible");
		$(".menuText").removeClass("invisible");
	}
	function closeMenu() {
		$("#menuSlide").css({ "width": "0" });
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

	// BOOTSTRAP OFF FOR SMALL
	function myFunction(x) {
		if (x.matches) { // If media query matches
			$("#page3").removeClass("row");
			$("#page4").removeClass("row");
			$("#page5").removeClass("row");
		}
	}
	var x = window.matchMedia("(max-width: 680px)");
	myFunction(x); // Call listener function at run time
	x.addListener(myFunction); // Attach listener function on state changes 

});

	window.onload = function () {
		data = window.location.hash.replace("#/", "").replace(".html", "");
		if (!data) location.href = '#/accueil';
		if (!data) data = "accueil";
		if (data != "accueil") loadview(data);
	};
	
	$(window).on('hashchange', function () {
		data = window.location.hash.replace("#/", "").replace(".html", "").replace("#", "");
		if (data != "accueil") loadview(data);
		else showproject();
	});

	function hideproject() {
		$(".one").slideUp("slow");
		$(".two").slideDown();
	}

	function showproject() {
		document.title = "Accueil - Kova";
		$(".one").slideDown();
		$(".two").slideUp("slow");
		document.getElementById('tab1').click();
	}

	function loadview(data) {
		var include = $('#' + data);
		if (include.html().length == 0) {
			var file = 'views/' + data + '.html';
			include.load(file);
		}
		document.title = include.attr("titre") + " - Kova";
		hideproject();
		document.getElementById('tab-' + data).click();
	}
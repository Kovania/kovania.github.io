	window.onload = function() { 

    	data = window.location.hash.replace("#/","").replace(".html","");
    	
    	if(!data) location.href='#/accueil';
    	if(!data) data = "accueil";
    	
    	if(data != "accueil") loadview(data);
    	
    }; 
    
    $(window).on('hashchange', function() {
    	
		data = window.location.hash.replace("#/","").replace(".html","").replace("#","");

		if(data != "accueil") loadview(data);
		else showproject();

    });
    
    function hideproject() {
    	
    	$( "#kova-project" ).slideUp("slow");

    }
    
    function showproject() {
    	
    	document.title = "Accueil - KovaSK";
    	$( "#kova-project" ).slideDown();
    	document.getElementById( 'tab1' ).click();

    }
    
    function loadview(data) {
    	
    
    	var include = $('#' + data);
        
        if (include.html().length == 0) {
          var file = 'views/' + data + '.html';
          include.load(file);
        }
        
        document.title = include.attr("titre") + " - KovaSK";
        
        hideproject();
        document.getElementById( 'tab-' + data ).click();
        
    }
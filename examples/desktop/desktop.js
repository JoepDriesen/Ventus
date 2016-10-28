/**
 * Ventus example
 * Copyright © 2012 Ramón Lamana
 */
(function($, Ventus) {
	$(document).ready(function() {
        
        /**
		var wm = new Ventus.WindowManager();

		window.wm = wm; // For debugging reasons

		// Terminal
		var terminalWin = wm.createWindow.fromQuery('.terminal-app', {
			title: 'Terminal',
			classname: 'terminal-window',
			width: 600,
			height: 300,
			x: 50,
			y: 60
		});

		terminalWin.signals.on('click', function(win){
			terminal.display.focus();
		});

		var terminal = new Terminus('.terminal-app', {
			welcome: '<div class="identity"><img src="terminal/img/logo.png" /><h1>Terminus.js</h1> ' +
				Terminus.version +
				'</div>Copyright 2012-2013 Ramón Lamana.<br/>' +
				'Press <span style="color:green">&lt; tab &gt;</span> to see a list of available commands.'
		});
		terminal.shell.include([TestCommands, ShapeCommands]);

		terminal.display.events.on('prompt', function() {
			terminalWin.$content.animate({
				scrollTop:terminalWin.el.find('.terminusjs').height()
			}, 300);
		});


		var todoWin = wm.createWindow.fromQuery('.todo-app', {
			title: 'Todo',
			width: 330,
			height: 400,
			x: 670,
			y: 60
		});

		var playerWin = wm.createWindow.fromQuery('.player-app', {
			title: 'Video Player',
			classname: 'player-window',
			width: 635,
			height: 300,
			x: 490,
			y: 320,
			resizable: false,
			opacity: 1 // To fix problems with chrome video on Linux
		});

		

		var aboutWin = wm.createWindow.fromQuery('.about-app', {
			title: 'About Ventus',
			width: 250,
			height: 280,
			x: 140,
			y: 380
		});

**/
		// Hide loader when loaded
		var loader = $("#login-screen .loader");
		var login_form = $("#login-screen #login-form");

		// For look & feel reasons
		function openWithDelay(win, delay) {
			setTimeout(function(){win.open();}, delay);
		}

		function init() {
			loader.fadeOut( 500, function() {
                login_form.slideDown( 500, function() {
                
                    $( '#login-screen #login-form input' ).keypress( function( e ) {
                        
                        if ( e.which == 13 ) {

                            var login_screen = $("#login-screen");
                            login_screen.addClass( 'hide' );
                            login_screen.on(Ventus.browser.animationEventName(), function() {
                                login_screen.hide();

                                // Open windows
                                //openWithDelay(terminalWin, 0);
                                //openWithDelay(todoWin, 200);
                                //openWithDelay(aboutWin, 400);
                                //openWithDelay(playerWin, 600);
                            });
                            
                        }

                    } );
                    
                    $( '#login-screen #login-form input:first-child' ).select();
                
                } );
                
            } );
            
		}

		setTimeout(function() {
			
            init();

		}, 500);


		// Exposé test button
		$(".expose-button").click(_.throttle(function(){
			wm.mode = 'expose';
			return false;
		}, 1000));
        
        
	});
})($, Ventus);

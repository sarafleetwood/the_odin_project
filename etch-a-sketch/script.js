
$(document).ready(function(){

	var numCell = prompt("Enter an even number from 16 to 64.");

	var hoverEffects = {
	    orange: function() {
			$(this).css("background-color", "orange");
	    	},
	    colorFade: function() {
			$(this).css("opacity", $(this).css("opacity") - 0.1);
	    	},
	    follow: function() {
	    	$(this).css("background", "#cfd8dc");
	    	$(this).fadeToggle("2500");
	    	},
	    rainbow: function() {
			var rainbow = ["red", "blue", "yellow", "green", "pink", "violet", "purple", "brown", "aqua", "gold"];
			var rand = rainbow[Math.floor(Math.random() * rainbow.length)];
			$(this).css("background", rand);
	    	}
	  }

  	var click = function(control){
		$("#controls_1, #controls_2, #controls_3, #controls_4").css("background-color", "black");
		$("#controls_1, #controls_2, #controls_3, #controls_4").css("color", "white");
		control.css("background-color", "white");
		control.css("color", "black");
	}

	$("#controls_1").click(function(){
		activeEffect = hoverEffects.orange; 
		click($(this));
		})
	$("#controls_2").click(function(){
		activeEffect = hoverEffects.colorFade;
		click($(this));
		})
	$("#controls_3").click(function(){
		activeEffect = hoverEffects.follow;
		click($(this));
		})
	$("#controls_4").click(function(){
		activeEffect = hoverEffects.rainbow;
		click($(this));
		})

	var updateSize = function(){
		$("#table").empty();
		for (var x=0; x < numCell * numCell; x++) {
			$("#table").append("<div class='cell' id='cell_"+ numCell +"'></div>");
			}
		$(".cell").css({
			'width': $("#table").width() / numCell,
			'height': $("#table").height() / numCell,
			})
		$(".cell").hover(function(){
			activeEffect.apply(this)
			})
	}
	
	$("#reset").click(function(){
		numCell = prompt("Enter another even number from 16 to 64.");
		updateSize();
		})

	updateSize();

	activeEffect = hoverEffects.orange;
	$("#controls_1").css("background-color", "white");
	$("#controls_1").css("color", "black");

})
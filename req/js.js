function startJS(){
	$("#color_button").click(function(){
		$("#home_container").slideUp("slow", function(){
			$("#find_color_container").slideDown("slow");
		});
	});
	$("#ohm_button").click(function() {
		console.log("hi");
		$("#home_container").slideUp("slow", function() {
			$("#find_value_container").slideDown("slow");
		});
	});
	
	$("#fcc_button").click(function(){
		units = $("#units").val();
		if ( ($("#value_input").val() != "" && $("#value_input").val().length >= 2) || ($("#value_input").val() !== "" && units != 1))  {
			send = $("#value_input").val();
			$("#fcc_top").css("color", "white");
			if ($("#fcc_resistor_container").css("display") == "block") {
				$("#fcc_resistor_container").slideUp("slow", function(){
					//console.log("slide up");
					// Do the math
					find_color_code(send, units);
					draw_vc();
					$("#fcc_resistor_container").slideDown("slow", function(){
					});
				});
			}	
		}
		else {
			$("#fcc_top").css("color", "red");
		}
	});
	
	$("#value_input").keydown(function(event){
		if ((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode == 8 || event.keyCode == 27 || event.keyCode == 127) {
			// let it go
			return true;
		}
		else {
			return false;
		}
	});
	
	$(".back_button").click(function(){
		//if($(this).parent().attr("id") == "fcc_bottom") {
		//	console.log("yep");
		//}
		$(this).parent().parent().slideUp("slow", function(){
			$("#home_container").slideDown("slow");
		});
	});
	
	$(".picker_button").click(function() {
		switch($(this).attr("id")) {
			case 'black' :
				if(band != 1) {
					value_to_band(band, 0, "black");
					hide_and_compute();
				}
				break;
			case 'brown' :
				value_to_band(band, 1, "brown");
				hide_and_compute();
				break;
			case 'red' :
				value_to_band(band, 2, "red");
				hide_and_compute();
				break;
			case 'orange' :
				value_to_band(band, 3, "orange");
				hide_and_compute();
				break;
			case 'yellow' :
				value_to_band(band, 4, "yellow");
				hide_and_compute();
				break;
			case 'green' :
				value_to_band(band, 5, "green");
				hide_and_compute();
				break;
			case 'blue' :
				value_to_band(band, 6, "blue");
				hide_and_compute();
				break;
			case 'violet' :
				if (band != 3) {
					value_to_band(band, 7, "violet");
					hide_and_compute();
				}
				break;
			case 'grey' :
				if (band != 3) {
					value_to_band(band, 8, "grey");
					hide_and_compute();
				}
				break;
			case 'white' :
				if (band != 3) {
					value_to_band(band, 9, "white");
					hide_and_compute();
				}
				break;
		}
		
	});
	
}

function value_to_band(band_num, color_num, color_name) {
	console.log("This was the value of band sent: "+ band_num)
	switch(parseInt(band_num)) {
		case 1:
			band_1 = parseInt(color_num) * 10;
			fcv_band_1_color = color_name;
			break;
		case 2:
			band_2 = parseInt(color_num);
			fcv_band_2_color = color_name;
			break;
		case 3:
			band_3 = Math.pow(10, parseInt(color_num));
			fcv_band_3_color = color_name;
			break;
	}
	
	draw_cv();
	
}

function hide_and_compute() {
	$("#picker_color").slideUp("slow", function() {
		console.log("Band 1: " + band_1);
		console.log("Band 2: " + band_2);
		console.log("Band 3: " + band_3);
		
		answer = ((band_1 + band_2) * band_3);
		console.log("CURRENT VALUE: "+answer)
		if(answer/1000000 >= 1) {
			answer = answer/1000000;
			attach_units = "M Ohms";
		}
		else if(answer/1000 >= 1) {
			answer = answer/1000;
			attach_units = "K Ohms";
		}
		else {
			attach_units = "Ohms";
		}
		$("#fvc_answer_container").html(answer + " " + attach_units);
	});
}

function show_picker(num) {
	band = parseInt(num);
	switch(band) {
		case 1:
			if($("#picker_color").css("display") == 'none') {
				$("#black").css("background-color", "transparent");
				$("#picker_color").slideDown("slow");
			}
			else {
				$("#picker_color").slideUp("slow", function() {
					$("#black").css("background-color", "transparent");
					$("#picker_color").slideDown("slow");
				});
			}
			
			break;
		case 2:
			if($("#picker_color").css("display") == 'none') {
				$("#black").css("background-color", "black");
				$("#violet").css("background-color", "violet");
				$("#grey").css("background-color", "grey");
				$("#white").css("background-color", "white");
				$("#picker_color").slideDown("slow");
			}
			else {
				$("#picker_color").slideUp("slow", function() {
					$("#black").css("background-color", "black");
					$("#violet").css("background-color", "violet");
					$("#grey").css("background-color", "grey");
					$("#white").css("background-color", "white");
					$("#picker_color").slideDown("slow");
				});
			}
			break;
		case 3:
			if($("#picker_color").css("display") == 'none') {
				$("#black").css("background-color", "black");
				$("#violet").css("background-color", "transparent");
				$("#grey").css("background-color", "transparent");
				$("#white").css("background-color", "transparent");
				$("#picker_color").slideDown("slow");
			}
			else {
				$("#picker_color").slideUp("slow", function() {
					$("#black").css("background-color", "black");
					$("#violet").css("background-color", "transparent");
					$("#grey").css("background-color", "transparent");
					$("#white").css("background-color", "transparent");
					$("#picker_color").slideDown("slow");
				});
			}
			break;
	}
}

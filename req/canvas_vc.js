/*
 * Project:     resistorMister
 * Description: Find resistor values and color codes. Designed for smartphone users
 * Website:     http://ezraezraezra.com/resistorMister
 * 
 * Author:      Ezra Velazquez
 * Website:     http://ezraezraezra.com
 * Date:        May 2011
 * 
 */
function draw_vc(){
	
		// wire
		context.beginPath();
		context.moveTo(0, canvas.height / 2);
		context.lineTo(320, canvas.height / 2);
		context.lineWidth = 20;
		context.strokeStyle = "#808080"; // line color
		context.lineCap = "square";
		context.stroke();
		
		// cavity
		context.beginPath();
		context.moveTo(90, canvas.height / 2);
		context.lineTo(230, canvas.height / 2);
		context.lineWidth = 80;
		context.strokeStyle = "#C9BE62"; // line color
		context.lineCap = "round";
		context.stroke();
		
		//band 1
		context.beginPath();
		context.moveTo(90, canvas.height / 2);
		context.lineTo(120, canvas.height / 2);
		context.lineWidth = 80;
		//fcc_band_1_color = "red";
		context.strokeStyle = fcc_band_1_color;
		context.lineCap = "butt";
		context.stroke();
		
		//band 2
		context.beginPath();
		context.moveTo(130, canvas.height / 2);
		context.lineTo(160, canvas.height / 2);
		context.lineWidth = 80;
		context.strokeStyle = fcc_band_2_color;
		context.lineCap = "butt";
		context.stroke();
		
		//band 3
		context.beginPath();
		context.moveTo(170, canvas.height / 2);
		context.lineTo(200, canvas.height / 2);
		context.lineWidth = 80;
		context.strokeStyle = fcc_band_3_color;
		context.lineCap = "butt";
		context.stroke();
	}
	
function find_color_code(value, units){
	//console.log(value);
	value_a = parseInt(value.substr(0, 1));
	value_b = parseInt(value.substr(1, 1));
	value_c = value.substr(2, value.length - 1);
	// Ohms
	value_c = value_c.length;
	// K Ohms
	if (parseInt(units) == 2) {
		value_c  = value_c + 3;
	}
	// M Ohms
	else if (parseInt(units) == 3) {
		value_c  = value_c + 6;
	}
	
	//console.log(value_a + " " + value_b + " " + value_c);
	
	pair_number_to_color(value_a, 1);
	pair_number_to_color(value_b, 2);
	pair_number_to_color(value_c, 3);
	
}		
			
			function pair_number_to_color(value, position) {
				switch(value) {
					case 0:
						color_band("black", position);
						break;
					case 1:
						color_band("brown", position);
						break;
					case 2:
						color_band("red", position);
						break;
					case 3:
						color_band("orange", position);
						break;
					case 4:
						color_band("yellow", position);
						break;
					case 5:
						color_band("green", position);
						break;
					case 6:
						color_band("blue", position);
						break;
					case 7:
						color_band("violet", position);
						break;
					case 8:
						color_band("grey", position);
						break;
					case 9:
						color_band("white", position);
						break;
				}
			}
			
			function color_band(a,b) {
				//console.log("Color: "+ a + " Position: " + b);
				b = parseInt(b);
				switch(b) {
					case 1:
						fcc_band_1_color = a;
						//console.log("1 sent");
						break;
					case 2:
						fcc_band_2_color = a;
						//console.log("2 sent");
						break;
					case 3:
						fcc_band_3_color = a;
						//console.log("3 sent");
						break;
				}
			}

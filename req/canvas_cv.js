function draw_cv(){
	
		// wire
		color_context.beginPath();
		color_context.moveTo(0, color_canvas.height / 2);
		color_context.lineTo(320, color_canvas.height / 2);
		color_context.lineWidth = 20;
		color_context.strokeStyle = "#808080"; // line color
		color_context.lineCap = "square";
		color_context.stroke();
		
		// cavity
		color_context.beginPath();
		color_context.moveTo(90, color_canvas.height / 2);
		color_context.lineTo(230, color_canvas.height / 2);
		color_context.lineWidth = 80;
		color_context.strokeStyle = "#C9BE62"; // line color
		color_context.lineCap = "round";
		color_context.stroke();
		
		//band 1
		color_context.beginPath();
		color_context.moveTo(90, color_canvas.height / 2);
		color_context.lineTo(120, color_canvas.height / 2);
		color_context.lineWidth = 80;
		//fcc_band_1_color = "red";
		color_context.strokeStyle = fcv_band_1_color;
		color_context.lineCap = "butt";
		color_context.stroke();
		
		//band 2
		color_context.beginPath();
		color_context.moveTo(130, color_canvas.height / 2);
		color_context.lineTo(160, color_canvas.height / 2);
		color_context.lineWidth = 80;
		color_context.strokeStyle = fcv_band_2_color;
		color_context.lineCap = "butt";
		color_context.stroke();
		
		//band 3
		color_context.beginPath();
		color_context.moveTo(170, color_canvas.height / 2);
		color_context.lineTo(200, color_canvas.height / 2);
		color_context.lineWidth = 80;
		color_context.strokeStyle = fcv_band_3_color;
		color_context.lineCap = "butt";
		color_context.stroke();
	}

	$("#colorCanvas").click(function(event) {
		x = event.pageX - this.offsetLeft;
		y = event.pageY - this.offsetTop;
		
		if( y >= (color_canvas.height/2 -40) && y <= (color_canvas.height/2 + 70)) {
			// band 1
			if(x >= 90 && x <= 120) {
				console.log("band 1");
				show_picker(1);
			}
			// band 2
			else if(x >= 130 && x <= 160) {
				console.log("band 2");
				show_picker(2);
			}
			// band 3
			else if(x >= 170 && x <= 200) {
				console.log("band 3");
				show_picker(3);
			}
		}
	});

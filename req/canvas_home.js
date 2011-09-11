function draw_home(){
	
		// wire
		home_context.beginPath();
		home_context.moveTo(25, home_canvas.height / 2);
		home_context.lineTo(173, home_canvas.height / 2);
		home_context.lineWidth = 20;
		home_context.strokeStyle = "#808080"; // line color
		home_context.lineCap = "square";
		home_context.stroke();
		
		// cavity
		home_context.beginPath();
		home_context.moveTo(65, home_canvas.height / 2);
		home_context.lineTo(133, home_canvas.height / 2);
		home_context.lineWidth = 50;
		home_context.strokeStyle = "#C9BE62"; // line color
		home_context.lineCap = "round";
		home_context.stroke();
		
		//band 1
		home_context.beginPath();
		home_context.moveTo(65, home_canvas.height / 2);
		home_context.lineTo(80, home_canvas.height / 2);
		home_context.lineWidth = 50;
		//_band_1_color = "red";
		home_context.strokeStyle = "red";
		home_context.lineCap = "butt";
		home_context.stroke();
		
		//band 2
		home_context.beginPath();
		home_context.moveTo(85, home_canvas.height / 2);
		home_context.lineTo(100, home_canvas.height / 2);
		home_context.lineWidth = 50;
		home_context.strokeStyle = "black";
		home_context.lineCap = "butt";
		home_context.stroke();
		
		//band 3
		home_context.beginPath();
		home_context.moveTo(105, home_canvas.height / 2);
		home_context.lineTo(120, home_canvas.height / 2);
		home_context.lineWidth = 50;
		home_context.strokeStyle = "black";
		home_context.lineCap = "butt";
		home_context.stroke();
		
	}
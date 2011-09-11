function draw_picker(){
		
		// cavity
		picker_context.beginPath();
		picker_context.moveTo(10, picker_canvas.height / 4);
		picker_context.lineTo(50, picker_canvas.height / 4);
		picker_context.lineWidth = 80;
		picker_context.strokeStyle = "#C9BE62"; // line color
		picker_context.lineCap = "round";
		picker_context.stroke();
		
	}
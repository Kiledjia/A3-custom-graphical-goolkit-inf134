// File name: demo.js

import {MyToolkit} from './mytoolkit.js';

// Implement a MyToolkit Button
var btn = new MyToolkit.Button;
btn.move(150,10);
btn.setText("Button Name");

btn.onclick(function(e){
	console.log(e);
});
btn.onmouseover(function(e){
	console.log(e);
});
btn.onmouseout(function(e){
	console.log(e);
});
btn.onmouseup(function(e){
	console.log(e);
});

var checkbx = new MyToolkit.CheckBox;
checkbx.move(50,10);
checkbx.setText("Checkbox Name");


checkbx.onclick(function(e){
	console.log(e);
});
checkbx.onmouseover(function(e){
	console.log(e);
});
checkbx.onmouseout(function(e){
	console.log(e);
});
checkbx.onmouseup(function(e){
	console.log(e);
});

var groupRadio = [];
for(var i = 0; i < 4; i++){
	groupRadio[i] = new MyToolkit.RadioButton(i);
	groupRadio[i].move(300,5);
	groupRadio[i].setText("Radio " + (i+1))
	groupRadio[i].removeToggle(false);
	groupRadio[i].onclick(function(e){
		console.log(e);
	});
	groupRadio[i].onmouseover(function(e){
		console.log(e);
	});
	groupRadio[i].onmouseout(function(e){
		console.log(e);
	});
	groupRadio[i].onmouseup(function(e){
		console.log(e);
	});
}
var txtBox = new MyToolkit.TextBox;
txtBox.move(50,20)

var scrollBar = new MyToolkit.ScrollBar;
scrollBar.move(200,0);
scrollBar.setHeight(250);

var progBar = new MyToolkit.ProgressBar;
progBar.move(50,30);
progBar.setWidth(350);
var slider = new MyToolkit.HorizontalSlide;
slider.move(100,0);
slider.setWidth(450);
slider.onclick(function(e){
	console.log(e);
});
slider.onmouseover(function(e){
	console.log(e);
});
slider.onmouseout(function(e){
	console.log(e);
});
slider.onmouseup(function(e){
	console.log(e);
});


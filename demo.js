// File name: demo.js

import {MyToolkit} from './mytoolkit.js';

// Implement a MyToolkit Button
var btn = new MyToolkit.Button;
btn.move(150,10);
btn.setText("Some Button");
// console.log(btn.textContent());
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
checkbx.move(150,10);

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

var n = 4;
for(var i = 0; i < n; i++){
	var radioBtn = new MyToolkit.RadioButton;
	radioBtn.move(150,5);
	radioBtn.onclick(function(e){
		console.log(e);
	});
	radioBtn.onmouseover(function(e){
		console.log(e);
	});
	radioBtn.onmouseout(function(e){
		console.log(e);
	});
	radioBtn.onmouseup(function(e){
		console.log(e);
	});
}

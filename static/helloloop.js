//hello.js
$(document).ready(function(){
	alert("Hello World");
});

$(function(){
	for (var i=0;i<100;i++){
		var msg = $('<div>Hello World</div>');
		msg.css('font-size',i);
	$('body').append(msg);
}
});
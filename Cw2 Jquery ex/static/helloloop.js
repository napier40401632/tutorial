$(document).ready(function(){
	alert("Hello world");
});
$(function(){
	for (var i=0;i<100;i++){
	var msg=$('<div>Hello World</div>');
	msg.css('font-size',i);
	$('body').append(msg);
	}
});
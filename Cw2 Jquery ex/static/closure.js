$(function(){
	for (var i=0;i<4;i++)
		$('body').append($('<div>/',{text:i}).click(function(){
			alert(i);
		}));
});
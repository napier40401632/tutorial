//hello.js
//$('body').append($('<div>Hide key</div>'));
$(document).ready(function(){
	alert("Hello World");
});

$(function(){
	var msg = $('<div>Hello World</div>');
	$('body').append(msg);
});
$(function(){
var gb = $('<div id="gid"/>');
	gb.append($('<div/>',{text:'Great Britian'}));
	gb.append($('<img/>',{src:'../flags/gb.gif'}));
	$('#countries').append(gb);
$('#countries').attr("id","gid");
});

$(function(){
$("#fr img").css({
	width:"400",
	border:"3px black solid"
	});
$("#fi img").css({
	width:"400",
	border:"3px black solid"
	});
$("#gid img").css({
	width:"400",
	border:"3px black solid"
	});
});

//$(function(){
//	var elem = $('<div/>');
//	elem.html('An example element');
//	elem.css('border','solid blue');
//	$('body').append(elem);
//});

$(function(){
	$('p:first-child').css('border','solid green');
	$('p:nth-child(1)').css('border','solid blue');
	$('p:eq(1)').css('border','solid red');
	$('p:last').css('border','solid yellow');
});

$(function(){
	var ca = {
		cname:"A J CUMMING",
		caddress:{
			street:"10 Colinton Rd",
			town:"Edinburgh",
			post_code:"EH14 5DT",
		},
		transaction:[
			{whn:"2014-01-11",nar:"Cash Withdrawal", amt:-100},
			{whn:"2014-01-11",nar:"BUS FARE", amt:-35}
		]
	};
	alert(ca.transaction[0].nar);
});
$(function(){
	$('#key tr').css('color','black').css('border','solid black');
	$('#key th').css('color','black').css('border','solid black');
	$('#key td').css('color','black').css('border','solid black');

});
$(function(){
	$('tr.t1:first-child').css('background-color','grey');
	$('tr').height(50);
	$('tr').width(50);
	$('#Schedule tr').css('color','black').css('border','1px solid black');
	$('#Schedule td').css('color','black').css('border','1px solid black');
	$('body').prepend($('<div/>',{text:'Hide Key',css:{color:'blue', cursor:'pointer'},
click:function(){
	if ($('#key:visible').length==1) {
	$('#key').fadeOut('show');
	$(this).text('Show Key');
}else{
	$('#key').fadeIn('slow');
	$(this).text('Hide Key');
}
}
}));

	$('table td:not(:empty)').mouseover(function(){
	$(this).css('background','red');
});

	$('table td').mouseout(function(){
	$(this).css('background','inherit');
});

});
//filter
$(document).ready(function(){
	$("li").filter(":even").css("background-color","red");
});

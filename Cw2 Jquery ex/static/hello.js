//hello.js
$(document).ready(function(){
	alert("Hello world");
});
$(function(){
	var msg=$('<div>Hello world</div>');
	$('body').append(msg);
});

$(function(){
	var gb=$('<div/>');
 	gb.append($('<div id="gid">',{text:'Great Britain'}));
 	gb.append($('<img/>',{src:'../static/flags/gb.gif'}));
 	$('#countries').append(gb);
 	$('#countries').attr("id","gid")

});
$(function(){
	var elem=$('<div/>');
	elem.html('An example element');
	elem.css('border','solid blue');
	$('body').append(elem);

});
$(function(){
 $( "#fr img").css({
 	background:"yellow",
 	border:"3px green solid",
 	width:"300px"
 });
});

$(function(){
 $( "#fi img").css({
 	background:"yellow",
 	border:"3px red solid",
 	width:"300px"
 });
 ///$(function(){
  //$( "$gid img").css({
 	//border:"3px red solid",
 	//width:"300px"
 //});
 //});
//});
$(function(){
$( "#countries img").css({
	border:"3px black solid",
	width:"300px"
});
});
$(function(){
	//body
	$('p:first-child').css('border','solid');
	$('p:nth-child(1)').css('border','solid');
	$('p:eq(1)').css('border','solid');
	$('p:last').css('border','solid');
});
$(function(){
	var ca={
		cname:"A J CUMMING",
		caddress:{
		 street:"10 Coliton Rd",
		 twon:"Ediburgh",
		 post_code:"EH14 5DT"
		},
		transaction:[
		 {whn:"2014-01-11",nar:"Cash Withdrawal",amt:-100},
		 {whn:"2014-01-11",nar"BUS FARE",amt:-35}]
	 ]
	};
	alert(ca.transaction[1].nar);
})

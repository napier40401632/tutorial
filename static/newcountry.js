//namecountry.js
$(function(){
var clist = [
	["br","Brazil"],
	["fr","France"],
	["gr","Greece"],
	["za","South Africa"]
];
$(function(){
	createOne();
})
function createOne(){
	var i = Math.floor(clist.length*Math.random());
	var code = clist[i][0];
	var name = clist[i][1];
	var qu = $('<div id="qu"/>');
	qu.append($('<div/',{text:name,id:'ans'}).hide());
	qu.append($('<img/>',{src:code+'.gif'}));
	qu.append($('<input/',{id:'response'}));
	$('body').append(qu);
}
$('#response').keyup(function(){
	if ($('#response').val()==$('#ans').text()}) {
	alert("Well Done");
}
});
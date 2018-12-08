function $() 
{
var elements = new Array();
for (var i = 0; i < arguments.length; i++)
{var element = arguments[i];
if (typeof element == 'string')
element = document.getElementById(element);
if (arguments.length == 1)
return element;
elements.push(element);
}
return elements;}

var t = new Date();//Сегодняшняя дата
var d = t.getDate();
var m = t.getMonth();
var y = t.getFullYear();

var t1 = new Date();

function d1()//Сделать проверку дня, месяца, года?
{
	t1.setDate(parseInt($('tx1').value));
	var d1 = t1.getDate();
	$('tx1').value='';
}

function m1()
{
	t1.setMonth(parseInt($('tx1').value)-1);
	var m1 = t1.getMonth();
	$('tx1').value='';
}

function y1()
{
	t1.setYear(parseInt($('tx1').value));
	var y1 = t1.getFullYear();
	$('tx1').value='';
}

//Дата из текстового поля получена

//Главные функции 
function n1()
{
	var s = new Date(100, 1, 29);
	var s1 = Math.round((t1-s)/1000/60/60/24);
	var s2 = Math.round((t-s)/1000/60/60/24);
	var r1 = 1;
	var r2 = 1;
	
	for (var i = 0; i <= s1; i=i+1461);
	{
		r1=r1+(i/1461);
	}
	for (var j = 0; j <= s2; j=j+1461);
	{
		r2=r2+(j/1461);
	}
	
	if (r1<r2)
	{
		$('tx1').value=r2-r1;
	}
	else 
	{
		$('tx1').value=r1-r2;
	}
	if (s1==s2 && d==29 && m==1) 
	{
		$('tx1').value='1';
	}
}

function w1()
{
	var w1 = t1.getDay();
	switch (w1) {
		case 0:
		$('tx1').value="Sunday";
		break;
		case 1:
		$('tx1').value="Monday";
		break;
		case 2:
		$('tx1').value="Tuesday";
		break;
		case 3:
		$('tx1').value="Wednesday";
		break;
		case 4:
		$('tx1').value="Thursday";
		break;
		case 5:
		$('tx1').value="Friday";
		break;
		case 6:
		$('tx1').value="Saturday";
		break;
	}	
}

//Функции для ввода:
function c()
{
	$('tx1').value='';
}

function f(x)
{
	$('tx1').value=$('tx1').value+x;
}

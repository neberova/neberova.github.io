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

function f1()
{
	a = parseInt($('tx1').value);
	b = parseInt($('tx2').value);
	if (a<b) 
	{
		var i;
		var step;
		v = '';
		for (i = a; i <= b; i++) 
		{		
			for (step = 1; step <= i; step++)
			{
				v=v+i+'.';
			}
		}
		$('tx3').value=v;
	}
	else
	{
		$('tx3').value='A должно быть меньше B!';
	}
}

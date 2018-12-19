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
	N = parseInt($('tx1').value);
	if (N>0) 
	{
		var i;
		for (i = 1; i <= N; i=i*3) 
		{ 
			if (i==N) 
			{
				$('tx2').value='TRUE';
			}
			else
			{
				$('tx2').value='FALSE';
			}
		}
	}
	else
	{
		$('tx2').value='N should be natural!';
	}
}

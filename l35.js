function $() 
{ var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; }

function f1()
{
	N=parseFloat($('tx1').value);
	K=parseFloat($('tx2').value);
	var s = 0;
	for(var i=1; i<=N; i++)
	{ 
		s = s + Math.pow(i,K);


	}
	$('tx4').value=s;

}

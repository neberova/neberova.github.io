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

function f2()
{
        a=parseFloat($('tx11').value);
	b=parseFloat($('tx12').value);
        x1=a;
        x2=b;
	if(a>b)
{$('tx9').value=''+a;
}
else
{$('tx9').value=''+b;
}
}

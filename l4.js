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



function f(x)
	
		{
		
			var str = "qwertyuiopasdfghjklzxcvbnm1234567890_.@";
		
			var mass = x.split('@');
		
			f1 = "Okay";
		
			if(mass.length!=2)


f1="False";
				for(i=0;i<x.length;i++)
					{tt=x.charAt(i);
					if(str.indexOf(tt)==-1)
					f1="False";}		
				
				return f1;
		

}

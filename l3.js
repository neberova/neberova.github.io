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
var today = new Date();
var day
var month
var year
var d
function f(x)
	{
		$("tx1").value = $("tx1").value+x;
	}
function f1()
  {
     if($("tx1").value <= 31)
    {
      day = $("tx1").value;
    }
    else
    {
    alert('Значение не должно быть выше 31');
    }
    $("tx1").value = '';
  } 
function f2()
  { 
    if($("tx1").value <= 12)
    {
      month = $("tx1").value;
    }
    else
    {
    alert('Значение не должно быть выше 12');
    }
      $("tx1").value = '';    
  }
function f3()
  { 
    year = $("tx1").value;
    $("tx1").value = '';
  }
function f4()
  {
    d = new Date(year,month,day);
    $("tx2").value = getWeekDay(d);
    $("tx3").value = datediff(d,today);
  }
function getWeekDay(date) {
  var days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

  return days[date.getDay()];
}
function datediff(first,second)
  {
    return Math.round((second-first)/(1000*60*60*24));
  }

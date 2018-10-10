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


function f1() {

    alert('?????');
   $("MyDiv1").style.borderLeftColor='blue';

    $("MyDiv3").style.clear='both';
    $("MyDiv1").style.letterSpacing='10px';
    $("MyDiv1").style.paddingBottom='5%';
    $("MyDiv1").style.textDecoration='overline';
    $("MyDiv1").style.backgroundColor='lime';
    $("MyDiv1").style.borderLeftWidth='40px';
}

function f2() {

    alert('?????');
   $("MyDiv2").style.borderLeftColor='blue';
    $("MyDiv2").style.letterSpacing='10px';
    $("MyDiv2").style.paddingBottom='5%';
    $("MyDiv2").style.textDecoration='overline';
    $("MyDiv2").style.backgroundColor='lime';
    $("MyDiv2").style.borderLeftWidth='40px';
}

function f3() {

    alert('?????');
   $("MyDiv3").style.borderLeftColor='blue';
    $("MyDiv3").style.letterSpacing='10px';
    $("MyDiv3").style.paddingBottom='5%';
    $("MyDiv3").style.textDecoration='overline';
    $("MyDiv3").style.backgroundColor='lime';
    $("MyDiv3").style.borderLeftWidth='40px';
}
function f4() {

    alert('?????');
   $("MyDiv4").style.borderLeftColor='blue';
    $("MyDiv4").style.letterSpacing='10px';
    $("MyDiv4").style.paddingBottom='5%';
    $("MyDiv4").style.textDecoration='overline';
    $("MyDiv4").style.backgroundColor='lime';
    $("MyDiv4").style.borderLeftWidth='40px';
}

function f5() {

    alert('?????');
   $("MyDiv5").style.borderLeftColor='blue';
    $("MyDiv5").style.letterSpacing='10px';
    $("MyDiv5").style.paddingBottom='5%';
    $("MyDiv5").style.textDecoration='overline';
    $("MyDiv5").style.backgroundColor='lime';
    $("MyDiv5").style.borderLeftWidth='40px';
}
function f6() {

    alert('?????');
   $("MyDiv6").style.borderLeftColor='blue';
    $("MyDiv6").style.letterSpacing='10px';
    $("MyDiv6").style.paddingBottom='5%';
    $("MyDiv6").style.textDecoration='overline';
    $("MyDiv6").style.backgroundColor='lime';
    $("MyDiv6").style.borderLeftWidth='40px';
}
function f7() {

    alert('?????');
   $("MyDiv7").style.borderLeftColor='blue';
    $("MyDiv7").style.letterSpacing='10px';
    $("MyDiv7").style.paddingBottom='5%';
    $("MyDiv7").style.textDecoration='overline';
    $("MyDiv7").style.backgroundColor='lime';
    $("MyDiv7").style.borderLeftWidth='40px';
}


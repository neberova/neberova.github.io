function middle() {
var a = parseInt(document.getElementById('a').value);
var b = parseInt(document.getElementById('b').value);
var c = parseInt(document.getElementById('c').value);

var res=0

if ((a>b && c>a) || (a>c && b>a)){

 res=a;
 }
else if ((b>a && c>b) || (b>c && a>b)){
 res=b;
}
else {
 res=c;
}


document.getElementById('result').innerHTML =res;
}

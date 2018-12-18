function middle() {

var N = parseInt(document.getElementById('N').value);

var sim1=0,sim2=1;

for (var i=0;i<N;i++){

	res= sim1 + sim2;
	
	
	console.log(res);
	document.getElementById('result').innerHTML =document.getElementById('result').innerHTML+res;

	
	sim1 = sim2 ;

	sim2=res;
}

}

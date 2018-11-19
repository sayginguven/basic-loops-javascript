let projectCounter = (function() {
    let counter = 0;
    return function() {
        counter += 1;
        return counter;
    }
}());

let clearAt100 = setInterval(function(){
	let projects = projectCounter(); 
	if(projects >100){
		clearInterval(clearAt100);
	} else{
		document.getElementsByClassName("demo")[0].innerHTML = projects;
	}
}, 35);

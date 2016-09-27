var left = function(cb){
	console.log("123");
    // cb();
}

var right = function(){
	console.log("777");
}
//function test(){
//	setTimeout(,5000)
//}

function test(){
	setTimeout(left(function(){console.log("122")}),2000);
		console.log("111");
}

function test2(){
    setTimeout(function(){left();},2000)
}
//function test(){
//	console.log("111");
//	setTimeout(function(){
//      left(function(){
//      		setTimeout(function(){
//      left();
//	},2000);
//      });
//	},2000);
//}

test2();
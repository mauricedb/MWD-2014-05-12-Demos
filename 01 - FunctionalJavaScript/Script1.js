(function(){

	var demo = "Hello script1"

	
	console.log(demo);

	
	var data = [1,2,3,4,5];
	data[7] = 7;
	var sum = 0;

var iterator = function(data, fn){
	for (var i = 0; i< data.length; i++){
		 if (data[i]){
			fn(data[i]);
		}
	}
}	

	iterator(data, function(item){sum += item});

	// for (var i = 0; i< data.length; i++){
		// if (data[i]){
			// sum += data[i];
		// }
	// }

	console.log(sum);

	sum = data.reduce(function(previous, item){
		return previous + item;
		}, 0);
	console.log(sum);
	
	
	var product = 1;
	// for (var i = 0; i< data.length; i++){
		// if (data[i]){
			// product *= data[i];
		// }
	// }
	iterator(data, function(item){product *= item});
	
	console.log(product);

	// data=[];
	product = data.reduce(function(previous, item){
		return previous * item;
		}, 1);
	console.log(product);
	
	
	function demoFn(){
		return {
			x : 12
		};
	}
	
	var result = demoFn(1,2,3);
	console.log("result.x",result.x);
	
	
	console.log("demoFn.length",demoFn.length);
	
	
	function add(){
		var sum = 0;
		
		for (var i=0;i<arguments.length;i++){
			sum += (+arguments[i]);
		}
		
		return sum;
	}
	
	console.log(add(1,2));
	console.log(add(1,2, 3));
	console.log(add(1,"2", 3));
	
	
	var o1 = {
		x: 123,
		f: function(){
			console.log("this.x", this.x);
			console.log("this", this);
		}
	};
	
	o1.f();
	
	var f2 = o1.f;
	f2();
	
	var o2 = {
		x: "This is o2",
		f3: o1.f
	}
	
	o2.f3();
})();

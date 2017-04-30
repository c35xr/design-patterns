
/* Singleton with c35xr */


var mySingleton = (function (){
	var instance;

	function init(){
		//private methods and variables
		function privateMethod(){
			console.log("I'm a private Method");
		}
		var privateVariable = "Im also private";
		var privateRandomNumber = Math.random();
		return{
			//Public methods and variables
			publicMethod : function (){
				console.log("Hi!, I'm a public method");
			},
			publicProperty : "I'm public",
			getRandomNumber : function(){
				return privateRandomNumber;
			}
		}
	}
	return {
		//get the singleton instance if one exits 
		//or crearre one if it doesn't
		getInstance : function(){
			if (!instance){
				instance = init();
			}
			return instance;
		}
	}
})(); // when you uses () after a function this is called immideately iife [immideately invoked function expression] 

//gets the instance of mySingleton
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();

singleA.publicMethod(); // we can access to this method beacuse its public

//singleA.privateMethod(); // in this case we can't access to a private method, we'll receive a error

console.log(singleA.getRandomNumber());


// in this case dont care if you call getRandomNumber any times because, singleton was instanced just one time
// for this reason, singleA is equals that singleB because just exists one instance of mySingleton
console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); 


/* Pattern with c35xr */


var Subject = function(){
	let observers = [];

	return {
		subscribeObserver : function(observer){
			observers.push(observer);
		},
		unsubscribeObserver : function(observer){
			var index = observers.indexOf(observer);
			if(index > -1){
				observers.splice(index,1);
			}
		},
		notifyObserver : function(observer){
			var index = observer.indexOf(observers);
			if(index > -1){
				observers[index].notify(index);
			}	
		},
		notifyAllObserver : function(){
			observers.forEach((observer, index)=>{
				observer.notify(index);
			});
		},
	}
}

var Observer = function(number){
	return {
		notify : function(){
			console.log("Observer " + number + " is notified!");
		} 
	}
}

var subject = new Subject();

var observer1 = new Observer(1);
var observer2 = new Observer(2);
var observer3 = new Observer(3);

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.unsubscribeObserver(observer3);

subject.notifyAllObserver();



$(function(){
	function myViewModel() { 
		var self = this;
     
	    self.items = ko.observableArray([
	        { itemName: 'Bert' },
	        { itemName: 'Charles' },
	        { itemName: 'Denise' }
	    ]);
	}
	ko.applyBindings(myViewModel);
})
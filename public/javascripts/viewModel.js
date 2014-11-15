$(function(){
	function myViewModel() { 
		var self = this;
     
	    self.comodityItems = ko.observableArray([
	        { itemName: 'ワンピースあまぞn', cost:'2450円', like:"false"},
	        { itemName: 'ワンピースあーす' , cost:'5450円', like:"false"},
	        { itemName: 'ワンピースユニクロ', cost:'1450円',like:"false"}
	    ]);
	    self.likeItems = ko.observableArray([
	        { itemName: 'ワンピースあまぞn', },	       
	    ]);
	    self.clickComodityItem = function(data){
	    	self.likeItems.push(data)
	    	self.comodityItems.remove(data)
	    }
	    self.clicklikeItems = function(data){
	    	self.comodityItems.push(data)
	    	self.likeItems.remove(data)
	    }
	}
	ko.applyBindings(myViewModel);

})

$(function(){
	function myViewModel() { 
		var self = this;
     
	    self.comodityItems = ko.observableArray([
	        { itemName: 'ワンピースあまぞn', cost:'2450円'},
	        { itemName: 'ワンピースあーす' , cost:'5450円'},
	        { itemName: 'ワンピースユニクロ', cost:'1450円'}
	    ]);
	    self.likeItems = ko.observableArray([
       
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

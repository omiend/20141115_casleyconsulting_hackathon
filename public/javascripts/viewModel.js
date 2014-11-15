$(function(){
	$.getJSON("test.js", function(json){
  		alert("JSON Data: " + json.users[3].name);
	});
	function myViewModel() { 
		var self = this;
     
	    self.comodityItems = ko.observableArray([
	        { itemName: 'ワンピースあまぞn', },
	        { itemName: 'ワンピースあーす' },
	        { itemName: 'ワンピースユニクロ' }
	    ]);
	    self.likeItems = ko.observableArray([
	        { itemName: 'ワンピースあまぞn', },
	        { itemName: 'ワンピースあーす' },
	        { itemName: 'ワンピースユニクロ' }
	    ]);
	}
	ko.applyBindings(myViewModel);
})
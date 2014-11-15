$(function(){
	$.getJSON("test.js", function(json){
  		alert("JSON Data: " + json.users[3].name);
	});
	function myViewModel() { 
		var self = this;
     
	    self.comodityItems = ko.observableArray([
	        { itemName: 'ワンピースあまぞn', cost:'2450円', like:"false"},
	        { itemName: 'ワンピースあーす' , cost:'5450円', like:"false"},
	        { itemName: 'ワンピースユニクロ', cost:'1450円',like:"false"}
	    ]);
	    self.likeItems = ko.observableArray([]);
	}
	ko.applyBindings(myViewModel);
})
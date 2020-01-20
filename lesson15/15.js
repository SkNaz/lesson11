 var data = { 
 	name: "menu", 
 	type: "row", 
 	items: [
 		{
 			title: "title 1",
 			handler: "ActionAdd"
 		},
 		{
 			title: "title 2",
 			handler: "ActionSaveAs"
 		},
 		{
 			title: "title 3",
 			handler: "ActionExit"
 		}
 	]
 }

 var actions = {
 	ActionAdd: function() {alert("Added!")},
 	ActionSaveAs: function() {alert("Saved!")},
 	ActionExit: function() { alert("GOOD BYE!")}
 }

var td = function() {
	var container = document.createElement("div");
	container.classList.add(data.type);

	for(var i = 0; i  < data.items.length; i++) {
    	var ok = document.createElement("span");
    	ok.classList.add("btn");
    	ok.innerHTML = data.items[i].title;
    	ok.setAttribute(data.items[i].handler, "");
    	container.append(ok);
   }

   container.addEventListener("click", function(event) {
   		var target = event.target;
   		
   		if(target.hasAttribute("ActionAdd")) {
   			actions.ActionAdd();
   		}

   		if(target.hasAttribute("ActionSaveAs")) {
   			actions.ActionSaveAs();
   		}
   		if(target.hasAttribute("ActionExit")) {
   			actions.ActionExit();
   		}
   });

   document.querySelector('body').append(container);
}
td();
var name;
while(!name)name=prompt("What is your name?");

rivets.formatters.prepend = function(value,to_add){
	if(value instanceof Array)return [to_add].concat(value);
	else return to_add + value;
}

rivets.formatters.append = function(value, to_add){
	if(value instanceof Array)return value.concat(to_add);
	else return value + to_add;
}

var model = {
	name:name,
	items: ["Foo","Bar","Baz"],
	add: function(){
		var val;
		while(!val)val = prompt("Enter a new value");
		model.items.push(val);
	}
}

var main = HTML.body.main;
rivets.bind(main,model);

main.classList.add("loaded");

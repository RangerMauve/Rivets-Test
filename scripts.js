var name;
while(!name)name=prompt("What is your name?");

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

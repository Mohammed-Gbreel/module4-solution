//========== Assignment-4 ==========================|
/*=== Some Random Names ===*/
var friendsName = ["Mohamed", "Ahamed", "Ali", "Sara", "Priya", "John", "Jim", "jasica", "jessy"]
var names = ""
for (var x in friendsName) {
	if (friendsName[x].startsWith('J') || friendsName[x].startsWith('j') == true) {
		console.log("Goodbye " + friendsName[x]);
	}
	else {
		console.log("Hello " + friendsName[x]);
	}
}
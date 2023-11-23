
var names = [];
names[0] = "Josh";
names[1] = "Alice";
names[2] = "john";
names[3] = "Bob";
names[4] = " David";
names[5] = "James";
names[6] = "jasmine";
names[7] = "Michael";

for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0)=== 'j' || names[i].charAt(0)=== 'J') {
        console.log("Goodbye " + names[i]);
    } else {
        console.log("Hello " + names[i]);
    }
}

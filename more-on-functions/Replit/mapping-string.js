let names = ["Chris", "Jim", "Sally", "Blake"];

// TODO: Write a mapping function
// and pass it to .map()
let getFirstInitial = function(name) {
    return name.charAt(0);
}

let firstInitials = names.map(getFirstInitial);

console.log(firstInitials);

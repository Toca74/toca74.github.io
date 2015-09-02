function tcArray() {
    var myArray = [];
    //var myArray = new Array();
    myList = ['lake', 'mike', 'cake', 'seal'];
    for (var n in myList) {
        if (myList.hasOwnProperty(n)) {
            document.writeln("<p>" + n + ": " + myList[n] + "</p>");
        }
    }
}

function tcHashtable() {
    var myHashtable = {};
    //var myHashtable = new Object();
    myHashtable["name"] = "Toca";
    myHashtable.city = "Vienna";
    for (var n in myHashtable) {
        if (myHashtable.hasOwnProperty(n)) {
            document.writeln("<p>" + n + ": " + myHashtable[n] + "</p>");
        }
    }
}
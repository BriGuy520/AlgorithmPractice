function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    var filteredGeese = birds.filter(function (bird) { return geese.indexOf(bird) === -1; });
    console.log(filteredGeese);
    return filteredGeese;
}
gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]);

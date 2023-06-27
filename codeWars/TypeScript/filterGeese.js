"use strict";
function gooseFilter(birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    const filteredGeese = birds.filter((bird) => geese.indexOf(bird) === -1);
    console.log(filteredGeese);
    return filteredGeese;
}
gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]);

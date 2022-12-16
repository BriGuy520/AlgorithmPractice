function gooseFilter(birds: string[]): string[] {
    const geese: string[] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    const filteredGeese: string[] = birds.filter((bird: string) => geese.indexOf(bird) === -1);

    console.log(filteredGeese);
    return filteredGeese; 
}

gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]);
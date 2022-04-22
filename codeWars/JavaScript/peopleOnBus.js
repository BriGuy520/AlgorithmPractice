var number = function(busStops){
    // Good Luck!
    let passengers = 0;

    busStops.forEach(stop => passengers += stop[0] - stop[1]);

    return passengers;
}

  number([[10,0],[3,5],[5,8]]);
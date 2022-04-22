var number = function(busStops){
    // Good Luck!

    return busStops.reduce((passengers, stop) => passengers += stop[0] - stop[1], 0);
}

  number([[10,0],[3,5],[5,8]]);
function gimme (triplet) {
      
  const originalTriplet = triplet.map(val => val);
  const sortedTriplet = triplet.sort((a, b) => a - b);
  
  return originalTriplet.indexOf(sortedTriplet[1]);

}
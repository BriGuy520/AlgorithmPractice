function zipWith(fn,a0,a1) {
  
  let answer = [];
  
  for(let i = 0; i < Math.min(a0.length, a1.length); i++) answer.push(fn(a0[i], a1[i]));

  return answer;
}


zipWith(Math.pow, [10,10,10,10], [0,1,2,3]); // [1, 10, 100, 1000]
zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )
zipWith((a,b) => a+b, [0,1,2,3,4  ], [6,5,4,3,2,1]), [6,6,6,6,6  ]
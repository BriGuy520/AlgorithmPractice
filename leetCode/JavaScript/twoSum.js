var twoSum = function(nums, target) {

  let hash = [];

  for(let i = 0; i < nums.length; i++){
      if(hash.indexOf(target - nums[i]) >= 0){
          return [hash.indexOf(target - nums[i]), i];
      } else {
          hash.push(nums[i]);
      }
  }
  
};
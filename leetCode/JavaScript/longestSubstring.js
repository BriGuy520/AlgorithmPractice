var lengthOfLongestSubstring = function(s) {

  let trackArr = [];
  let highestArr = [];

  for(let i = 0; i < s.length;i++){

    if(s[i] != s[i + 1]){
      trackArr.push(s[i]);
    } else {

      highestArr = [...trackArr];
      console.log(highestArr);
      trackArr = [];  
    }

  }

  console.log(trackArr);
};


lengthOfLongestSubstring("bbb");
lengthOfLongestSubstring("abcabcaabbcabcd");
lengthOfLongestSubstring("abcabcbb");


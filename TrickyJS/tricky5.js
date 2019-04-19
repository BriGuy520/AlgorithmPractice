console.log(555555555555555555);

// 555555555555555600

// This happens because it's bigger than the Number.MAX_SAFE_INTEGER
// Anything, past 16 digits will will have this effect.
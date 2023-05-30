function humanReadable(seconds: number): string {

  let timeLeft: number = seconds;
  let hour: number|string  = 0;
  let minutes: number|string = 0;

  while(timeLeft >= 60){

    if(timeLeft >= 3600){
      hour += 1;
      timeLeft -= 3600;
    } else if(timeLeft >= 60){
      minutes += 1;
      timeLeft -= 60;
    }

  }

  return `${hour < 10 ? `0${hour}`:`${hour}`}:${minutes < 10 ? `0${minutes}`:`${minutes}`}:${timeLeft  < 10 ? `0${timeLeft}`:`${timeLeft}`}`;
}

humanReadable(10); // 00:00:05
humanReadable(86399); // 23:59:59


function humanReadable(seconds) {
    var timeLeft = seconds;
    var hour = 0;
    var minutes = 0;
    while (timeLeft >= 60) {
        if (timeLeft >= 3600) {
            hour += 1;
            timeLeft -= 3600;
        }
        else if (timeLeft >= 60) {
            minutes += 1;
            timeLeft -= 60;
        }
    }
    console.log("".concat(hour < 10 ? "0".concat(hour) : "".concat(hour), ":").concat(minutes < 10 ? "0".concat(minutes) : "".concat(minutes), ":").concat(timeLeft < 10 ? "0".concat(timeLeft) : "".concat(timeLeft)));
    return "".concat(hour < 10 ? "0".concat(hour) : "".concat(hour), ":").concat(minutes < 10 ? "0".concat(minutes) : "".concat(minutes), ":").concat(timeLeft < 10 ? "0".concat(timeLeft) : "".concat(timeLeft));
}
humanReadable(10); // 00:00:05
humanReadable(86399); // 23:59:59

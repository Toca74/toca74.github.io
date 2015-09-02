function currentTime() {
    "use strict";
    var curTime = new Date(),
        hours = curTime.getHours(),
        minutes = curTime.getMinutes(),
        format;
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    format = hours + ":" + minutes;
    if (hours > 11) {
        format = format + " PM";
    } else {
        format = format + " AM";
    }
    return format;
}
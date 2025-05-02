// Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

// For instance, if now were 10:00 am, and there was no daylight savings shift, then:

// getSecondsToday() == 36000 // (3600 * 10)

function getSecondsToday()
{
    let curr = new Date();
    return curr.getHours()*3600 + curr.getMinutes()*60 + curr.getSeconds();
}
alert(getSecondsToday());
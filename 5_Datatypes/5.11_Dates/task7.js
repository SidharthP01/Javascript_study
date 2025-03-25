// Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

// For instance, if now is 23:00, then:

// getSecondsToTomorrow() == 3600

function getSecondsToTomorrow()
{
    let curr = new Date();
    return ((24*3600) - curr.getHours()*3600 + curr.getMinutes()*60 + curr.getSeconds());
}
alert(getSecondsToTomorrow());
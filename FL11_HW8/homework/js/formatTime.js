function formatTime(a){
    let days = Math.floor(a / 1440);
    let hours = Math.floor(a % 1440 / 60);
    let minutes = Math.floor(a % 1440 % 60);
    return days + ' day(s)' + hours + ' hour(s)' + minutes + ' minute(s)';
}
console.log(formatTime(3600));
function clock(){
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December" ];
var dayName= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday" ]
var today = new Date();
document.getElementById('Date').innerHTML = (dayName[today.getDay()] + " " +
today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' +today.getFullYear());

var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
var day = h<11 ? 'AM' : 'PM';

h = h<10? '0'+h: h;
m = m<10? '0'+m: m;
s = s<10? '0'+s: s;

document.getElementById('hours').innerHTML = h;
document.getElementById('min').innerHTML = m;
document.getElementById('sec').innerHTML = s;

}var inter = setInterval(clock,400);

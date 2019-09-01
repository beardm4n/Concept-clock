let clock = document.querySelector('#clock'),
    color = document.querySelector('#color');

function getTime() {
   let time = new Date(),
       hour = time.getHours().toString(),
       min = time.getMinutes().toString(),
       sec = time.getSeconds().toString();

   if (hour.length < 2) hour = '0' + hour;
   if (min.length < 2) min = '0' + min;
   if (sec.length < 2) sec = '0' + sec;

   let clockString = hour + ':' + min + ':' + sec;
   let colorString = '#' + hour + min + sec;

   clock.textContent = clockString;
   color.textContent = colorString;

   document.body.style.background = colorString;
}
getTime();
setInterval(getTime, 1000);
const day = document.querySelector('.day');
const hour = document.querySelector('.progress-ring__hours');
const min = document.querySelector('.progress-ring__minutes');
const sec = document.querySelector('.progress-ring__seconds');
const radiusH = hour.r.baseVal.value;
const radiusM = min.r.baseVal.value;
const radiusS = sec.r.baseVal.value;
// calculate the circumference
const circumferenceH = 2 * Math.PI * radiusH;
const circumferenceM = 2 * Math.PI * radiusM;
const circumference = 2 * Math.PI * radiusS;

hour.style.strokeDasharray = `${circumferenceH} ${circumferenceH}`;
hour.style.strokeDashoffset = circumferenceH;

min.style.strokeDasharray = `${circumferenceM} ${circumferenceM}`;
min.style.strokeDashoffset = circumferenceM;

sec.style.strokeDasharray = `${circumference} ${circumference}`;
sec.style.strokeDashoffset = circumference;

function setHours(hours) {
    const offset = circumferenceH - hours / 12 * circumferenceH;
    hour.style.strokeDashoffset = offset;
}

function setMinutes(minutes) {
    const offset = circumferenceM - minutes / 60 * circumferenceM;
    min.style.strokeDashoffset = offset;
}

function setSeconds(seconds) {
    const offset = circumference - seconds / 60 * circumference;
    sec.style.strokeDashoffset = offset;
}

function getHours() {
    const time = new Date(),
          h = time.getHours();

    (h >= 0 && h < 12) ? day.textContent = 'AM' : day.textContent = 'PM'; 

    if (h >= 0 && h < 12) {
        setHours(h);
    } else {
        setHours(h - 12);
    }
}

setInterval(getHours, 1000)

function getMinutes() {
    const time = new Date(),
          m = time.getMinutes() + 1;
    setMinutes(m);
}

setInterval(getMinutes, 1000)

function getSeconds() {
    const time = new Date();
    let s = time.getSeconds() + 1;
    setSeconds(s);
}

setInterval(getSeconds, 500);
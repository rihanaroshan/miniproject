const display=document.getElementById('clock');
const audio=new Audio('mixkit-alarm-digital-clock-beep-989.wav');
audio.loop=true;
let alarmTime=null;
let alarmTimeout=null;

function updateTime()  {
    const date=new Date();

    const hour=date.getHours();
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();

    display.innerText=`${hour} : ${minutes} : ${seconds}`

}

function formatTime(time) {
    if(time<10) {
        return '0' + time;
    }
    return time;
}

function setAlarmTime(value){
    alarmTime=value;
}

function setAlarm() {
    if(alarmTime) {
        const current=new Date();
        const timeToAlarm=new Date(alarmTime);

        if(timeToAlarm>current) {
            const timeout=timeToAlarm.getTime() - current.getTime();
            alarmTimeout=setTimeout(() => audio.play(),timeout);
            alert('Alarm set');
        }
    }
}

function clearAlarm() {
    audio.pause();
    if(alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}
setInterval(updateTime,1000);


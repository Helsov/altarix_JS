/*Есть класс часов. При создании экземпляра класса в свойство this.date записывается текущая дата/время. При вызове метода start раз в секунду в this.date записывается новое время. Метод getTime возвращает время в формате «hh:mm:ss».
При вызове getTime через 5 секунд после запуска часов время не отличается от того, которое было при создании часов.
Необходимо исправить часы, чтобы они работали корректно:
*/

function Clock(){
    this.date = new Date();
};

Clock.prototype = {
    start: function(){
        return setInterval(()=>this.date = new Date(), 1000)
    },
    getTime: function(){
        return this.date.toLocaleTimeString()
    }
};

//Создаем экземпляр часов и запускаем их
let myClock = new Clock();
myClock.start();

//Отображаем текущее время
console.log(myClock.getTime());

//Через 5 секунд отображаем текущее время
setTimeout(function() {
    console.log(myClock.getTime());
}, 5000);

/*Разработать класс AlarmClock. Отнаследовать его от Clock. AlarmClock должен иметь метод setAlarmTime, который будет принимать время срабатывания будильника в формате «hh:mm:ss». Необходимо расширить метод start класса Clock так, чтобы если время в this.date оказалось равным времени alarmTime, отобразился alert c каким-нибудь текстом. */

function AlarmClock(){
    Clock.apply(this, arguments);
    this.alarmTime;
};

AlarmClock.prototype.setAlartmTime = function(e){
    return this.alarmTime = e;
};

AlarmClock.prototype.start = function(){
    Clock.prototype.start.apply(this, arguments);
    setInterval(()=>{
        this.date = this.date.toLocaleTimeString();
        if(this.date == this.alarmTime){
            alert ('Будильник сработал в: ' + this.alarmTime);
        }
    }, 1000);
};


var myAlarmClock = new AlarmClock();
myAlarmClock.setAlartmTime('11:39:40');
myAlarmClock.start();

/*Есть класс часов. При создании экземпляра класса в свойство this.date записывается текущая дата/время. При вызове метода start раз в секунду в this.date записывается новое время. Метод getTime возвращает время в формате «hh:mm:ss».
При вызове getTime через 5 секунд после запуска часов время не отличается от того, которое было при создании часов.
Необходимо исправить часы, чтобы они работали корректно:
*/

function Clock(){
    this.date = new Date();
    this.start = function(){
        return setInterval(()=>this.date = new Date(), 1000);
    };
    this.getTime = function(){
        return this.date.toLocaleTimeString();
    };
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
}
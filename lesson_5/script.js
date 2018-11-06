// Календарь. Принимает год, месяц. Рисует таблицу переданного месяца.
// При клике – выделяет соответствующий день в таблице (по onClick назначение класса active ячейке таблицы – дню)

window.onload = function () {

    function myCalendar(year, month) {
        var date = new Date();
        var sDate = date.getDate();
        var numberOfDay = new Date(year, month, 0).getDate();
        var wDay = new Date(year, month, numberOfDay).getDay();
        var dayFirst = new Date(year, month,1).getDay();
        
        var idCalendar = document.querySelector('#myCalendar');
        var weekDay = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
        var calendar = '<tr>';

        var wDay = '';

        for (var i in weekDay) {
            wDay += `<td>${weekDay[i]}</td>`;
        }

        if (dayFirst != 0) {
            for(var i = 1; i < dayFirst; i++) calendar += '<td>';
        } else { 
            for(var i = 0; i < 6; i++) calendar += '<td>';
        }

        for (var i = 1; i <= numberOfDay; i++) {
            if (i != date.getDate()) {
                calendar += `<td class="day">${i}</td>`;
            } else {
                calendar += `<td class="today">${i}</td>`;
            }
                if (new Date(year, month, i).getDay() == 0) { 
                    calendar += '<tr>';
            }
        }

        if (wDay != 0) {
            for (var i = wDay; i < 7; i++) calendar += '<td>';
        }

        document.querySelector('thead').innerHTML = wDay;
        document.querySelector('tbody').innerHTML = calendar;

        document.querySelector('tbody').onclick = function(e){
            if(e.target.innerHTML !== '') {
                if(idCalendar.querySelectorAll('.active').length) {
                    idCalendar.querySelectorAll('.active')[0].classList.remove('active');
                }
                e.target.classList.add('active');
            }
        };
        
    }

    myCalendar(2018, 11);

}
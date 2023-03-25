function time () {
    let date = new Date();

    let dayNumber = date.getDay()
    // console.log(dayNumber); //получения дня недели от 0 - 6 (начало с воскресенья)

    let hour = date.getHours()
    // console.log(hour); // получение времени часов

    let minute = date.getMinutes()
    // console.log(minute); // получение времени минут

    let second = date.getSeconds()
    // console.log(second); // получение времени минут
    
    let ampm = hour >= 12 ? 'pm' : 'am';
    // console.log(ampm);
    
    let dayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    // console.log(dayNames[dayNumber]);

    // переопределяем значения для перевода к двенадцатичасовой системе и добавляем для красоты нолик в числах меньше 10
    // определяем остаток от деления
    hour = hour % 12;
    // всё работает кроме 12 часов дня. для него напишем, что он равен 12
    // работает так. Проверяется условия hour (это true или false), если true то hour = hour, если false (в случае когда сейчас 12 часов дня) пишем принудительно, что '12'
    hour = hour ? hour : '12';
    //Если времени меньше 10, то выдаётся одна число, что некрасиво, добавим нолик
    hour = hour < 10 ? '0' + hour : hour
    // Тоже самое для минут
    minute = minute < 10 ? '0' + minute : minute
    // Тоже самое для секунд
    second = second < 10 ? '0' + second : second

    document.querySelector('.day').textContent = dayNames[dayNumber];
    document.querySelector('.hour').textContent = hour;
    document.querySelector('.minutes').textContent = minute;
    document.querySelector('.seconds').textContent = second;
    document.querySelector('.ampm').textContent = ampm;

    //тк функция сама не будет обновляться постоянно надо задать таймер, например на каждую секунду (1000ms)
    setTimeout(time, 1000)
}
time()
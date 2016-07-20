(function() {
    var timeNow = new Date().getTime(); // текущее время в данный момент времени
    var timeFrom = new Date().getTime() - (14*86400000); // с какого дня начинать отсчет времени

    var randomInt = function(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    };

    var arrayDate = [];
    var month;
    var date;
    var hours;
    var min;
    var year;

    var comments = document.querySelectorAll('span.date__comment'); // находим все элементы span, с классом date__comment

    for (var i = 0; i < comments.length; i++) {
        var randomTime = randomInt(timeNow, timeFrom);
        var dateComment = new Date(randomTime).getTime();
        arrayDate.push(dateComment);

    }

    arrayDate.sort(function(a, b) {
        return a - b;
    });

    for (var j = 0; j < arrayDate.length; j++ ) {

        year = new Date(arrayDate[j]).getFullYear();
        month = new Date(arrayDate[j]).getMonth() + 1;
        date = new Date(arrayDate[j]).getDate();
        hours = new Date(arrayDate[j]).getHours();
        min = new Date(arrayDate[j]).getMinutes();

        if (month <= 9) {
            month = '0' + month;
        };
        if (date <= 9) {
            date = '0' + date;
        };
        if (min <= 9) {
            min = ('0' + min);
        };

        var formatDate = date + '.' + month + '.' + year + ' ' + hours + ':' + min;
        comments[j].innerHTML = formatDate;
    }


})();

var commentNumber = document.getElementsByClassName('comments__item');
var commentCount = document.querySelector('span.counter');
commentCount.innerHTML = ('&#128172;' + ' ' + commentNumber.length + ' Комментариев');



var now = Date.now(),
    day = 1000 * 60 * 60 * 24;
var post = document.querySelector('span.date__post'); // находим все элементы span, с классом date__post
post.innerHTML = (new Date(now - day*14).toLocaleDateString() + ' '); // проставляем дату публикации (14 дней назад)
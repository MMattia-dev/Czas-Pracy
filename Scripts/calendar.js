const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    //const nextDays = 7 - lastDayIndex - 1;
    const nextDays = 7 - lastDayIndex - 0;

    //const prevDays = 7 - prevLastDay - 0;

    //alert(nextDays);

    const months = [
        "Styczeń",
        "Luty",
        "Marzec",
        "Kwiecień",
        "Maj",
        "Czerwiec",
        "Lipiec",
        "Sierpień",
        "Wrzesień",
        "Październik",
        "Listopad",
        "Grudzień",
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()] + ' ' + date.getFullYear();
    //document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";

    //for (let x = firstDayIndex; x > 1; x--) {
    //    days += `<div class="prev-date">${prevLastDay - x + 2}</div>`;
    //}

    if (firstDayIndex == 0) {
        for (let x = 7; x > 1; x--) {
            days += `<div class="prev-date">${prevLastDay - x + 2}</div>`;
        }
    }
    else {
        for (let x = firstDayIndex; x > 1; x--) {
            days += `<div class="prev-date">${prevLastDay - x + 2}</div>`;
        }
    }


    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }


    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
    }
    monthDays.innerHTML = days;






    var g = 1;
    $('.days div').each(function () {
        if (!$(this).hasClass("prev-date") && !$(this).hasClass("next-date")) {
            $(this).attr('id', 'dayID_' + g++);
            $(this).attr('onclick', 'show_sidenav_right()');
        }
    });
    $('.days div').mouseover(function () {
        var id = this.id;

        $('#' + id).click(function () {


            $('.days div').css('background-color', 'white');
            $(this).css('background-color', 'rgba(238,167,68,0.9)');


            //if () {

            //}
            //else {

            //}
        });
    });
};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

const calendarDays = document.getElementById('calendarDays');
const monthYear = document.getElementById('monthYear');
const prevMonth = document.getElementById('prevMonth');
const nextMonth = document.getElementById('nextMonth');

let date = new Date();

function renderCalendar() {
    date.setDate(1);

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayIndex = date.getDay();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    monthYear.innerText = `${months[date.getMonth()]} ${date.getFullYear()}`;

    let days = "";

    for (let i = 1; i <= lastDay; i++) {
        if ( i === new Date().getDate()  &&  date.getMonth() === new Date().getMonth()  &&  date.getFullYear() === new Date().getFullYear()
        ) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j= 0; j < firstDayIndex; j++) {
        days = `<div class="empty"></div>` + days;
    }

    calendarDays.innerHTML = days;
}

prevMonth.addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

nextMonth.addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();


const eventDates = document.querySelectorAll('.eventDate')
const allDates = document.querySelectorAll('.dates p')

// checking for events
eventDates.forEach(a => {
    let date = a.textContent
    let [day, dateNum, time] = date.split(" ")
    allDates.forEach(b => {
        let currentDate = b.textContent
        if (currentDate === dateNum) {
            b.classList.add('event')
        }
    })
})
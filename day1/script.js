const headers = document.querySelectorAll(".form")

headers.forEach((header) => {
    header.addEventListener('click', () => {
        headers.forEach((a) => a.classList.remove('active'))
        header.classList.add('active')

        if (header.innerHTML === "Flights") {
            document.querySelector("#flightsForm").classList.remove("noDisplay")
            document.querySelector("#hotelsForm").classList.add("noDisplay")
            document.querySelector("#carsForm").classList.add("noDisplay")
        } else if (header.innerHTML === "Hotels") {
            document.querySelector("#flightsForm").classList.add("noDisplay")
            document.querySelector("#hotelsForm").classList.remove("noDisplay")
            document.querySelector("#carsForm").classList.add("noDisplay")
        } else if (header.innerHTML === "Cars") {
            document.querySelector("#flightsForm").classList.add("noDisplay")
            document.querySelector("#hotelsForm").classList.add("noDisplay")
            document.querySelector("#carsForm").classList.remove("noDisplay")
        }
    })

})
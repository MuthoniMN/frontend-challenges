let keys = document.querySelectorAll('p')

keys.forEach((key) => {
    key.addEventListener('click', () => {
        if (key.textContent !== "" && !document.querySelector('#capital').classList.contains("active")){
            document.querySelector('.textbox').innerHTML += key.textContent
        } else if (key.textContent !== "" && document.querySelector('#capital').classList.contains("active")) {
            document.querySelector('.textbox').innerHTML += key.textContent.toUpperCase()
            document.querySelector('#capital').classList.remove("active")
        } else if (key.id === "delete") {
            document.querySelector('.textbox').innerHTML = document.querySelector('.textbox').innerHTML.slice(0, document.querySelector('.textbox').innerHTML.length - 1)
        } else if (key.id === "capital") {
            key.classList.toggle("active")
        } else if (key.classList.contains("spaceBar")) {
            document.querySelector('.textbox').innerHTML += " "
        }
    })
})
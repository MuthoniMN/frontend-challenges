let keys = document.querySelectorAll('p')

keys.forEach((key) => {
    key.addEventListener('click', () => {
        let text = document.querySelector('.textbox').innerHTML
        if(key.textContent !== ""){
            text += key.textContent
        } else if (key.id === "delete") {
            text = text.slice(0, text.length - 1)
        }
    })
})
const sliders = document.querySelectorAll(".highlight")

setTimeout(() => {
    sliders[0].classList.add('noDisplay')
    sliders.push(sliders.shift())
}, 1000)
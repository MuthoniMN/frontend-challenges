function showSlides() {
    let index = 0
    let slides = document.querySelectorAll('img');

    slides[index].classList.remove('noDisplay')
    setInterval(() => {
        slides[index].classList.add('noDisplay')

        index++

        if (index === slides.length) {
            slides.forEach((a) => a.classList.remove('noDisplay'))
            showSlides()
        }
    }, 2000)
}

showSlides()
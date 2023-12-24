const slider = () => {
    const imgList = document.querySelector('.img-list')
    const buttonsSlide = document.querySelectorAll('.button')
    const maxScrollLeft = imgList.scrollWidth - imgList.clientWidth
    buttonsSlide.forEach(button => {
        button.addEventListener('click', () => {
            const course = button.id === 'prev' ? -1 : 1
            const scrollAmount = imgList.clientWidth * course
            imgList.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            })
        })
    })
    const handleSliderButtons = () => {
        buttonsSlide[0].style.display = imgList.scrollLeft <= 0 ? "none" : "block"
        buttonsSlide[1].style.display = imgList.scrollLeft >= maxScrollLeft ? "none" : "block"
    }
    imgList.addEventListener('scroll', () => {
        handleSliderButtons()
    })
}
window.addEventListener('load', slider);

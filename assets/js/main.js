const body= document.body;
const slide = document.querySelector('.dark')

body.addEventListener('mousemove', (e) => {
    slide.classList.remove('slide');
    body.style.setProperty(
        '--mousex', ((e.pageX / body.offsetWidth) * 100).toFixed(2) + "%"
    )
})


body.addEventListener('mouseleave' , () => {
    slide.classList.add('slide')
})
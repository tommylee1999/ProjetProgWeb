/*Animation hamburgerMenu*/

const hamburgerBtn = document.querySelectorAll('.hamburgerMenu');
hamburgerBtn.forEach(btn => {
    btn.addEventListener('click',() => {
        btn.classList.toggle('active');
    })
});

const text = document.querySelectorAll('navigationLinks');
text.forEach(btn => {
    btn.addEventListener('click',() => {
        btn.classList.toggle('active');
    })
})

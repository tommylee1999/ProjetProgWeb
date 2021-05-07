/*Animation hamburgerMenu*/

const hamburgerBtn = document.querySelectorAll('.hamburgerMenu');
hamburgerBtn.forEach(btn => {
    btn.addEventListener('click',() => {
        btn.classList.toggle('active');
    })
});



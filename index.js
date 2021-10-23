let buttons = document.querySelectorAll('.btn');
let happy = document.querySelector(".happy")


for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        for(let j of buttons) {
            if(j.classList.contains('active')) {
                j.classList.toggle('active')
            }
        }
        buttons[i].classList.toggle('active')
    }
    )}

    // window.addEventListener('mousemove', (e) => {
    //     let x = e.clientX;
    //     let y = e.clientY
    //     happy.style.top = `${y}px`
    //     happy.style.left = `${x}px`
    // })
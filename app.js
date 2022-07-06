const navSlide = () => {
    const sus = document.querySelector('.sus');
    const nav = document.querySelector('.nav-links');

    sus.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

    })
}

navSlide();
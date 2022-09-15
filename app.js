
// counter number function

const counterNum = document.querySelectorAll('.counter-numbers');
const speed = 200;

counterNum.forEach(element => {
    const updateNumber = () => {
        const targetNumber = parseInt(element.dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(element.innerText);
        // console.log(initialNum);

        const incrementNum = Math.trunc(targetNumber / speed)
        // console.log(incrementNum);

        if (initialNum < targetNumber) {
            element.innerText = `${initialNum + incrementNum}+`;
            setTimeout(updateNumber, 10)
        }
    };
    updateNumber();
});



// swiper js code

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
const img_links = [{
    path: "./images/register.png",
    link: "https://mrrpp97.github.io/login_regitser_practice2-/",
    name: "Registration Form"
},
{
    path: "./images/bs_prac.png",
    link: "https://mrrpp97.github.io/bootstarp_prac/",
    name: "BootStrap Practice"
},
{
    path: "./images/clr_flipper.png",
    link: "https://2mrrp97.github.io/Js-color-flipper/",
    name: "Color Flipper"
},
{
    path: "./images/carousel.png",
    link: "https://2mrrp97.github.io/Carousel-Project/",
    name: "Carousel Project"
}];


let nxt = document.getElementById('next-btn');
let prv = document.getElementById('prev-btn');
let content = document.getElementById('slidercontent');
let slider = document.getElementById('slider');
let rlink = document.getElementById('redirect-link');

let curr_index = 0;

function slide_left(element) {
    curr_index = (curr_index + 1) % img_links.length;
    let next_img = img_links[curr_index];

    element.src = next_img.path;
    rlink.href = next_img.link;

}

function slide_right(element) {
    curr_index = curr_index - 1 >= 0 ? curr_index - 1 : img_links.length - 1;
    let next_img = img_links[curr_index];

    element.src = next_img.path;
    rlink.href = next_img.link;

}

nxt.addEventListener('click', () => {
    slide_left(content);
});

prv.addEventListener('click', () => {
    slide_right(content);
});


slider.addEventListener('mouseenter', () => {
    let btn = document.getElementById('goprj');
    let sliderimg = document.getElementById('slidercontent');

    btn.classList.add('active-visit-btn');
    sliderimg.classList.add('sliderimghover');

});

slider.addEventListener('mouseleave', () => {
    let btn = document.getElementById('goprj');
    let sliderimg = document.getElementById('slidercontent');

    btn.classList.remove('active-visit-btn');
    sliderimg.classList.remove('sliderimghover');

});

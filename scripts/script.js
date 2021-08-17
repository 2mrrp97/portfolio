
// this part is for checking navbar collapse or not , if collapse add expand functionality 
let body_section = document.getElementById('rest-of-body');
var toggler = document.getElementById('toggler');
var navlinks = document.getElementById('navlinks');

function checker() {
    toggler.addEventListener('click', () => {
        if (navlinks.classList.contains('fade-out')) {
            navlinks.classList.remove('fade-out');
            body_section.style.marginTop = "11rem"; // push body sec a bit down 
        }
        else {
            navlinks.classList.add('fade-out');
            body_section.style.marginTop = "0rem"; // push body sec up again
        }
    });
};

checker();

// if window width > 1100px reset navlink to org pos and push body_section up
window.addEventListener('resize', () => {
    let width = window.innerWidth;
    if (width >= 1101) {
        navlinks.classList.remove('fade-out');
        body_section.style = null;
    }
});

// this part for typing text effect 
var msgElt = document.getElementById('d');
let mssg = "Greetings Fellow Traveller , Welcome to My Profile! Here I have show cased all of my Projects and technologies i have worked on !";

function write(msg, element, index) {
    let s = new String();

    let interval = setInterval(() => {
        s = s.concat(msg.charAt(index++));
        element.innerText = s;
        if (index == msg.length) {
            clearInterval(interval);
        }
    }, 70);
}

write(mssg, msgElt, 0);

// this part for headings as -> technologies i use 
let tech_h = document.getElementsByClassName("tech");
console.log(tech_h);
for (let i in tech_h) {
    tech_h[i].innerText = "</ Technologies I Use >";
}


// this part for appear effect in frontend and backend part of skills 
function appear_if_inview_left() {
    let element = document.getElementById("frontEnd");
    let d_top = element.getBoundingClientRect().top;
    let screenPos = window.innerHeight;

    if (d_top < screenPos) {
        element.classList.add("appear-in-lr");
    }
}

function appear_if_inview_right() {
    let element = document.getElementById("backEnd");

    let d_top = element.getBoundingClientRect().top;
    let screenPos = window.innerHeight;

    if (d_top < screenPos) {
        element.classList.add("appear-in-rl");
    }
}

window.addEventListener('scroll', appear_if_inview_left);
window.addEventListener('scroll', appear_if_inview_right);

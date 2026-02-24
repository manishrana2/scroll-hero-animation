window.addEventListener("load", function () {

gsap.registerPlugin(ScrollTrigger);

/* ===== LOAD ANIMATION ===== */

let tl = gsap.timeline();

tl.to(".headline span",{
    y:0,
    opacity:1,
    duration:0.6,
    stagger:0.05,
    ease:"power3.out"
})

.to(".stat",{
    opacity:1,
    y:-10,
    duration:0.6,
    stagger:0.2
},"-=0.3");


/* ===== SCROLL ANIMATION ===== */

let scrollTL = gsap.timeline({
    scrollTrigger:{
        trigger:".hero",
        start:"top top",
        end:"+=150%",
        scrub:true,
        pin:true
    }
});

scrollTL.to(".headline",{
    scale:0.9,
    opacity:0.6,
    ease:"none"
},0.5);

scrollTL.to(".stats",{
    opacity:0,
    y:-40,
    ease:"none"
},0.5);

scrollTL.to(".main-image",{
    y:-80,
    scale:1.2,
    ease:"none"
},0);

});

window.addEventListener("load", function(){

gsap.registerPlugin(ScrollTrigger);

console.log("Hero scroll animation initialized");

/* -------- Intro animation when page loads -------- */

let introTimeline = gsap.timeline();

introTimeline.to(".headline span",{
y:0,
opacity:1,
duration:0.6,
stagger:0.05,
ease:"power2.out"
})

.to(".stat",{
opacity:1,
y:-10,
duration:0.6,
stagger:0.2
},"-=0.3");


/* -------- Hero scroll based animation -------- */

let heroScrollTimeline = gsap.timeline({
scrollTrigger:{
trigger:".hero",
start:"top top",
end:"+=150%",
scrub:true,
pin:true
}
});

/* subtle cinematic motion */

heroScrollTimeline.to(".headline",{
scale:0.9,
opacity:0.6,
ease:"none"
},0.5);

heroScrollTimeline.to(".stats",{
opacity:0,
y:-40,
ease:"none"
},0.5);

heroScrollTimeline.to(".main-image",{
y:-70,
scale:1.18,
ease:"none"
},0);

});

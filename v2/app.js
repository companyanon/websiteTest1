console.log("commit")

let controller;
let slideScene;
let pageScene;

function animatePages() {
    controller = new ScrollMagic.Controller();

    //Select some things
    const sections = document.querySelectorAll('.section');
    const nav = document.querySelector('.nav');

    //Loop over each section
    sections.forEach(section => {
        const RevealTagline = section.querySelector('.welcomeText1');
        const Reveal = section.querySelector('.anima');
        const RevealImg = section.querySelector('.welcomeIcon');
        const RevealCard = section.querySelector('.featureCard')
        const RevealMessage = section.querySelector('.message1')
        const slide = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "power2.inOut"
            }
        });
        slide.fromTo(RevealImg, {
            x: "-70%",
            opacity: 0
        }, {
            x: "0%",
            opacity: 1
        }, );
        slide.fromTo(RevealTagline, {
            x: "60%",
            opacity: 0
        }, {
            x: "0%",
            opacity: 1
        }, "-=2");

        slide.fromTo(Reveal, {
            y: "60%",
            opacity: 0
        }, {
            y: "0%",
            opacity: 1
        }, "-=2");
        slide.fromTo(RevealMessage, {
            y: "100%",
            opacity: 0
        }, {
            y: "0%",
            opacity: 1
        }, "-=2");
        slide.fromTo(Reveal, {
            y: "60%",
            opacity: 0
        }, {
            y: "0%",
            opacity: 1
        }, "-=2");



        //Tween for timeline

        //Create Scene

        slideScene = new ScrollMagic.Scene({
                triggerElement: section,
                triggerHook: 0.6,
                reverse: false
            })
            .setTween(slide)
            // .addIndicators({
            //     name: "slide"
            // })
            .addTo(controller)

        //New Animation
        const pageTl = gsap.timeline();
        pageTl.fromTo(slide, {
            opacity: 1
        }, {
            opacity: 0
        })
        pageScene = new ScrollMagic.Scene({
                triggerElement: section,
                duration: '100%',
                triggerHook: 0
            })
            // .addIndicators({
            //     name: "page",
            //     indent: 200
            // })
            .addTo(controller)
    });
}
animatePages();


// const exploreScene = new ScrollMagic.Scene({
//         triggerElement: '.section2',
//         triggerHook: 0.2
//     })
//     .addIndicators()
//     .addTo(controller);
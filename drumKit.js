const firstAudio = document.querySelector('#firstAudio')
const secondAudio = document.querySelector('#secondAudio')
const thirdAudio = document.querySelector('#thirdAudio')
const fourthAudio = document.querySelector('#fourthAudio')
const fifthAudio = document.querySelector('#fifthAudio')
const sixthAudio = document.querySelector('#sixthAudio')
const seventhAudio = document.querySelector('#seventhAudio')
const div = document.querySelectorAll ('div')

const first = document.querySelector('#first')
const second = document.querySelector('#second')
const third = document.querySelector('#third')
const fourth = document.querySelector('#fourth')
const fifth = document.querySelector('#fifth')
const sixth = document.querySelector('#sixth')
const seventh = document.querySelector('#seventh')

const firstx = document.querySelector('#firstx')
const secondx = document.querySelector('#secondx')
const thirdx = document.querySelector('#thirdx')
const fourthx = document.querySelector('#fourthx')
const fifthx = document.querySelector('#fifthx')
const sixthx = document.querySelector('#sixthx')
const seventhx = document.querySelector('#seventhx')

first.addEventListener('click',function() {
    firstAudio.play()
})
second.addEventListener('click',function() {
    
    secondAudio.play()
})
third.addEventListener('click',function() {
    thirdAudio.play()
})
fourth.addEventListener('click',function() {
    fourthAudio.play()
})
fifth.addEventListener('click',function() {
    fifthAudio.play()
})
sixth.addEventListener('click',function() {
    sixthAudio.play()
})
seventh.addEventListener('click',function() {
    seventhAudio.play()
})

window.addEventListener('keydown',function(e) {
    if (e.key ==='W' || e.key ==='w' ) {
        firstx.classList.add('animate')
        setTimeout(() => {
           firstx.classList.remove('animate') 
        }, 100);
        first.classList.add('animatex')
        setTimeout(() => {
           first.classList.remove('animatex') 
        }, 100);
        firstAudio.play()
    }
    else if (e.key ==='A' || e.key ==='a') {
        secondx.classList.add('animate')
        setTimeout(() => {
           secondx.classList.remove('animate') 
        }, 100);
        second.classList.add('animatex')
        setTimeout(() => {
           second.classList.remove('animatex') 
        }, 100);
        secondAudio.play()
    }
    else if (e.key ==='S' || e.key ==='s') {
        thirdx.classList.add('animate')
        setTimeout(() => {
           thirdx.classList.remove('animate') 
        }, 100);
        third.classList.add('animatex')
        setTimeout(() => {
           third.classList.remove('animatex') 
        }, 100);
        thirdAudio.play()
    }
    else if (e.key ==='D' || e.key ==='d') {
        fourthx.classList.add('animate')
        setTimeout(() => {
           fourthx.classList.remove('animate') 
        }, 100);
        fourth.classList.add('animatex')
        setTimeout(() => {
           fourth.classList.remove('animatex') 
        }, 100);
        fourthAudio.play()
    }
   else if (e.key ==='Q' || e.key ==='q') {
    fifthx.classList.add('animate')
    setTimeout(() => {
       fifthx.classList.remove('animate') 
    }, 100);
    fifth.classList.add('animatex')
    setTimeout(() => {
       fifth.classList.remove('animatex') 
    }, 100);
        fifthAudio.play()
    }
    else if (e.key ==='E' || e.key ==='e') {
        sixthx.classList.add('animate')
        setTimeout(() => {
           sixthx.classList.remove('animate') 
        }, 100);
        sixth.classList.add('animatex')
        setTimeout(() => {
           sixth.classList.remove('animatex') 
        }, 100);
        sixthAudio.play()
    }
    else if (e.key ==='R' || e.key ==='r') {
        seventhx.classList.add('animate')
        setTimeout(() => {
           seventhx.classList.remove('animate') 
        }, 100);
        seventh.classList.add('animatex')
        setTimeout(() => {
           seventh.classList.remove('animatex') 
        }, 100);
        seventhAudio.play()
    }
})
var knightchoose=document.getElementById("1")
var knightclose=document.querySelector('.job1_BG .job_body button')
var knight_BG=document.querySelector('.job1_BG')

var wizardchoose=document.getElementById("2")
var wizardclose=document.querySelector('.job2_BG .job_body button')
var wizard_BG=document.querySelector('.job2_BG')

var thiefchoose=document.getElementById("3")
var thiefclose=document.querySelector('.job3_BG .job_body button')
var thief_BG=document.querySelector('.job3_BG')

function toggleknight(e){
    console.log(e.target)
    knight_BG.classList.toggle('hide')
}

function togglewizard(e){
    console.log(e.target)
    wizard_BG.classList.toggle('hide')
}

function togglethief(e){
    console.log(e.target)
    thief_BG.classList.toggle('hide')
}

knightchoose.addEventListener('click', toggleknight)
knightclose.addEventListener('click', toggleknight)


wizardchoose.addEventListener('click', togglewizard)
wizardclose.addEventListener('click', togglewizard)

thiefchoose.addEventListener('click', togglethief)
thiefclose.addEventListener('click', togglethief)
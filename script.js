// const anime = require("animejs");

//const aboutus = document.getElementById('aboutus');
const page1 = document.getElementById('first_page');
const page2 = document.getElementById('second_page');
const page3 = document.getElementById('third_page');
const page4 = document.getElementById('fourth_page');
const page5 = document.getElementById('fifth_page');
// const elements = document.getElementsByClassName('first_page second_page third_page fourth_page fifth_page footer bc_image')
const video = document.getElementById('video');
const cancel = document.getElementById('cancel');
const x = document.getElementsByTagName('iframe');




const burger = document.getElementById('burger');
const backHome = document.getElementById('pnc');
const body1 = document.getElementById('body1');
const p_nav = document.getElementById('p_nav');
const p_elements = document.getElementById('p_a');
const p_elements1 = document.getElementById('p_a1');
const p_elements2 = document.getElementById('p_a2');
const p_elements3 = document.getElementById('p_a3');

const goaway1 = ()=>{
    event.preventDefault();
p_nav.style.display = 'block';
}
const govideo1 = () =>
{
    event.preventDefault();
p_nav.style.display = 'none';
}

const scroll = (e)=>
{
    // event.preventDefault();
    p_nav.style.display ='none';
    e.scrollIntoView(true);
}
burger.addEventListener('click',goaway1);
pnc.addEventListener('click',govideo1);
// p_elements.addEventListener('click',scroll(page1));

function myfun()
{
    event.preventDefault();
    page3.scrollIntoView();
    p_nav.style.display = 'none';
}
function myfun1()
{
    event.preventDefault();
    page2.scrollIntoView();
    p_nav.style.display = 'none';
}
function myfun2()
{
    event.preventDefault();
    // page3.scrollIntoView();
    p_nav.style.display = 'none';
}
function myfun3()
{
    event.preventDefault();
    page5.scrollIntoView();
    p_nav.style.display = 'none';
}

function dp()
{
    alert('In development process. ');
}

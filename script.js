const body = document.body
const containers = body.querySelectorAll('.container')
const textbuttons = body.querySelectorAll('.accordion')
const questions = [
    "What is Frontend Mentor, and how will it help me?",
    "Is Frontend Mentor free?",
    "Can I use Frontend Mentor projects in my portfolio?",
    "How can I get help if I'm stuck on a challenge?"
]

for (let i = 0; i < containers.length; i++) {
    containers[i].style.setProperty('--info', `"${questions[i]}"`);
    console.log(containers[i].style.getPropertyValue('--info'));
}

textbuttons.forEach((button) => button.addEventListener("click", function() {
    console.log("SHOW");
    button.parentElement.parentElement.querySelector('.panel').style.hidden = false;
    console.log(    button.parentElement.parentElement.querySelector('.panel').style.hidden);
})
)
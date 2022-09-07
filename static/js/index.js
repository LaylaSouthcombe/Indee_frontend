const baseUrl = "https://cors-everywhere.herokuapp.com/http://indeebackend-env.eba-5pvithgn.us-east-1.elasticbeanstalk.com/"
const baseClientUrl = "https://indee.netlify.app/"

const loginSection = document.getElementById("login")
loginSection.addEventListener("click", () => {
    window.location.href = `${baseClientUrl}login`
})

const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

const infoTextRight = document.querySelector('.infoTextRight')
const infoTextLeft = document.querySelector('.infoTextLeft')

const showRightText = () => {
    infoTextRight.style.display = "block"
}
const showLeftText = () => {
    infoTextLeft.style.display = "block"
}

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left')
    infoTextLeft.style.display = "none"
    setTimeout(showLeftText, 875)
})

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left')
})
 
right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right')
    infoTextRight.style.display = "none"
    setTimeout(showRightText, 875)
})
right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right')
})
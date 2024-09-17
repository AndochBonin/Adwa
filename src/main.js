const menuNav = document.querySelector(".menuNav")
const menuOpenButton = document.querySelector('.menuOpenButton')
const menuCloseButton = document.querySelector('.menuCloseButton')
const menuHomeButton = document.querySelector('.menuHomeButton')

menuOpenButton.addEventListener("click", () => {
    console.log("Menu Open Button Clicked")
})

menuCloseButton.addEventListener("click", () => {
    console.log("Menu Close Button Clicked")
})

menuHomeButton.addEventListener("click", () => {
    console.log("Menu Home Button Clicked")
})
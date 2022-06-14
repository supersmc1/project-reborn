const items1 = document.querySelector('.item1')
const items2 = document.querySelector('.item2')
const items3 = document.querySelector('.item3')
const items4 = document.querySelector('.item4')
const icon = document.querySelector('.icon')

const appstore = document.querySelector('.apple')
const playstore = document.querySelector('.play')

icon.addEventListener('click',function(){
  window.location = 'https://supersmc1.github.io/project-reborn/'
})

window.addEventListener("scroll",function(event){
let scrollY = this.scrollY
let scrollX = this.scrollX
console.log(scrollY)
console.log(scrollX)
}) //좌표값얻기 함수

items1.addEventListener('click',function(){
  console.log('hi')
  window.scrollTo(0,700)
})

items2.addEventListener('click',function(){
  window.scrollTo(0,1300)
})

items3.addEventListener('click',function(){
  window.scrollTo(0,2000)
})

items4.addEventListener('click',function(){
  window.scrollTo(0,2930)
})

appstore.addEventListener('click',function(){
  window.location = "https://apps.apple.com/us/app/gunfire-reborn/id1606703078"
})

playstore.addEventListener('click',function(){
  window.location = "https://play.google.com/store/apps/details?id=com.duoyihk.m2m1&hl=en&gl=TW"
})


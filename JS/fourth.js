const prince = document.querySelector('.prince')
const aobi = document.querySelector('.aobi')
const say = document.querySelector('.say')
const lay = document.querySelector('.lay')
const pich = document.querySelector('.pich')
const tutle = document.querySelector('.tutle')

const heroimgs = document.querySelector('.heroimgs')
const heroimgschd = heroimgs.children

const princechd = prince.children
const aobichd = aobi.children
const saychd = say.children
const laychd = lay.children
const pichchd = pich.children
const tutlechd = tutle.children

console.dir(laychd[0])

princechd[0].addEventListener('mouseover',function(){
  console.log('hello')
  princechd[0].src =  "./image/11.png"
  heroimgschd[0].src = "./image/프린스수정.png"
  princechd[0].addEventListener('mouseout',function(){
    princechd[0].src =  "./image/11black.png"
  })
})

aobichd[0].addEventListener('mouseover',function(){
  console.log('hello')
  aobichd[0].src =  "./image/12.png"
  heroimgschd[0].src = "./image/아오바이수정.png"
  aobichd[0].addEventListener('mouseout',function(){
    aobichd[0].src =  "./image/12black.png"
  })
})

saychd[0].addEventListener('mouseover',function(){
  console.log('hello')
  saychd[0].src =  "./image/13.png"
  heroimgschd[0].src = "./image/세이앤수정.png"
  saychd[0].addEventListener('mouseout',function(){
    saychd[0].src =  "./image/13black.png"
  })
})

laychd[0].addEventListener('mouseover',function(){
  console.log('hello')
  laychd[0].src =  "./image/14.png"
  heroimgschd[0].src = "./image/레이루오수정.png"
  laychd[0].addEventListener('mouseout',function(){
    laychd[0].src =  "./image/14black.png"
  })
})

pichchd[0].addEventListener('mouseover',function(){
  console.log('hello')
  pichchd[0].src =  "./image/15.png"
  heroimgschd[0].src = "./image/타오수정.png"
  pichchd[0].addEventListener('mouseout',function(){
    pichchd[0].src =  "./image/15black.png"
  })
})

tutlechd[0].addEventListener('mouseover',function(){
  console.log('hello')
  tutlechd[0].src =  "./image/16.png"
  heroimgschd[0].src = "./image/거북이수정.png"
  tutlechd[0].addEventListener('mouseout',function(){
    tutlechd[0].src =  "./image/16black.png"
  })
})

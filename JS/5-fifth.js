const monkey = document.querySelector('.monkey')
const stone = document.querySelector('.stone')
const fish = document.querySelector('.fish')
const bear = document.querySelector('.bear')
const lion = document.querySelector('.lion')
const ship = document.querySelector('.ship')
const snake = document.querySelector('.snake')

const monkeychd = monkey.children
const stonechd = stone.children
const fishchd = fish.children
const bearchd = bear.children
const lionchd = lion.children
const shipchd = ship.children
const snakechd = snake.children

const twoboss = document.querySelector('.twoboss')
const mpdiv = document.createElement('div')
const mpdivs = document.createElement('div')
const namecards = document.createElement('h1')
const closebtn = document.createElement('button')
//호버이벤트 이미지변경
monkey.addEventListener('mouseover',function(){
  //console.log('hello')
  monkeychd[0].src = './image/흑육오누.png'
  monkey.addEventListener('mouseout',function(){
    monkeychd[0].src = './image/육오누.png'
  })
})

stone.addEventListener('mouseover',function(){
  stonechd[0].src = './image/흑골램누.png'
  stone.addEventListener('mouseout',function(){
    stonechd[0].src = './image/골램누.png'
  })
})

fish.addEventListener('mouseover',function(){
  fishchd[0].src = './image/흑어룡누.png'
  fish.addEventListener('mouseout',function(){
    fishchd[0].src = './image/어룡누.png'
  })
})

bear.addEventListener('mouseover',function(){
  bearchd[0].src = './image/흑극지요왕누.png'
  bear.addEventListener('mouseout',function(){
    bearchd[0].src = './image/극지요왕누.png'
  })
})

lion.addEventListener('mouseover',function(){
  lionchd[0].src = './image/흑바람신누.png'
  lion.addEventListener('mouseout',function(){
    lionchd[0].src = './image/바람신누.png'
  })
})

ship.addEventListener('mouseover',function(){
  shipchd[0].src = './image/흑해골배누.png'
  ship.addEventListener('mouseout',function(){
    shipchd[0].src = './image/해골배누.png'
  })
})

snake.addEventListener('mouseover',function(){
  snakechd[0].src = './image/흑규룡누.png'
  snake.addEventListener('mouseout',function(){
    snakechd[0].src = './image/규룡누.png'
  })
})
// 공통 함수로 묶음
function mpdivclass (){
  twoboss.appendChild(mpdiv)
  mpdiv.style.width = '40vw'
  mpdiv.style.height = '29vw'
  mpdiv.style.border = '2px solid #d9c581'
  mpdiv.style.backgroundColor = 'black'
  mpdiv.style.position = 'absolute'
  mpdiv.style.display = 'flex'
  mpdiv.style.justifyContent = 'space-around'
  mpdiv.style.alignItems = 'center'
  mpdiv.style.flexDirection = 'column'
  mpdiv.appendChild(mpdivs)
  mpdiv.appendChild(namecards)
  mpdiv.appendChild(closebtn)
  namecards.style.color = '#d9c581'
  namecards.style.fontSize = '50px'
  namecards.style.fontWeight = 'bold'
  namecards.style.fontFamily = 'GenKJwajinOTF-Bd'
  namecards.style.position = 'relative'
  namecards.style.top = '10px'
  mpdivs.style.width = '38vw'
  mpdivs.style.height = '20vw'
  mpdivs.style.backgroundRepeat = 'no-repeat'
  mpdivs.style.backgroundSize = 'cover'
  mpdivs.style.backgroundPosition = 'center'
  closebtn.style.width = '5vw'
  closebtn.style.height= '3vh'
  closebtn.style.cursor= 'pointer'
  closebtn.style.backgroundColor = '#d9c581'
  closebtn.textContent = '닫기'
}
//닫기 버튼 
closebtn.addEventListener('click',function(){
  twoboss.removeChild(mpdiv)
})

function maxWidth (){
  if (matchMedia("screen and (max-width: 1000px)").matches){
    namecards.style.fontSize = '40px'
    mpdiv.style.width = '70vw'
    mpdiv.style.height = '60vw'
    mpdivs.style.width = '68vw'
    mpdivs.style.height = '40vw'
    closebtn.style.width = '10vw'
    console.log('hello')
  }

  if (matchMedia("screen and (max-width: 500px)").matches){
    namecards.style.fontSize = '40px'
    mpdiv.style.height = '85vw'
    mpdivs.style.height = '63vw'
    closebtn.style.width = '10vw'
    namecards.style.fontSize = '30px'
    console.log('hello')
  }

}

// 각보스별 클릭시 동영상재생
monkey.addEventListener('click',function(){
  mpdivclass()
  mpdivs.style.backgroundImage = 'url(./image/test육오.gif)'
  namecards.textContent = '육오'
  maxWidth()
})

fish.addEventListener('click',function(){
  mpdivclass()
  mpdivs.style.backgroundImage = 'url(./image/test어룡.gif)'
  namecards.textContent = '어룡의 후예'
  maxWidth()

})

ship.addEventListener('click',function(){
  mpdivclass()
  mpdivs.style.backgroundImage = 'url(./image/test해골배.gif)'
  namecards.textContent = '도깨비 함선'
  maxWidth()
})

snake.addEventListener('click',function(){
  mpdivclass()
  mpdivs.style.backgroundImage = 'url(./image/test규룡.gif)'
  namecards.textContent = '규룡'
  maxWidth()

})

bear.addEventListener('click',function(){
  mpdivclass()
  mpdivs.style.backgroundImage = 'url(./image/test극지요왕.gif)'
  namecards.textContent = '극지요왕'
  maxWidth()

})

stone.addEventListener('click',function(){
  mpdivclass()
  mpdivs.style.backgroundImage = 'url(./image/test골램.gif)'
  namecards.textContent = '골램'
  maxWidth()

})

lion.addEventListener('click',function(){
  mpdivclass()
  mpdivs.style.backgroundImage = 'url(./image/test바람신.gif)'
  namecards.textContent = '바람의 신'
  maxWidth()

})

//새로고침 함수
window.onresize = function () {
  document.location.reload();
};






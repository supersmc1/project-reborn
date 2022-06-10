//자동새로고침 함수
const lines = document.querySelector('.lines')

window.onresize = function () {
  document.location.reload();
};
if (matchMedia("screen and (max-width: 1000px)").matches){
  console.log('hello')
}
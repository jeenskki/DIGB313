let count = 0;
let z = 1;
let loadBoxCount = Math.floor(Math.random() * 21 + 30);
const rootNode = document.querySelector('#root');

document.querySelector('.add-box').addEventListener('click', addBox);

document.querySelector('.change-color').addEventListener('click', changeBox);

// background-color 색상 랜덤 테이블
function getRandomColor() {
  let hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}

// div 박스 생성
function addBox() {
  let box = document.createElement('div');
  let randomTopPosition = Math.floor(Math.random() * 510 + 80);
  let randomLeftPosition = Math.floor(Math.random() * 630 + 10);

  // dynamic
  box.classList.add('box',`box--${count++}`);
  box.style.backgroundColor = getRandomColor();
  box.style.top = `${randomTopPosition}px`;
  box.style.left = `${randomLeftPosition}px`;
  box.style.zIndex = 0;

  // append box
  rootNode.appendChild(box);

  box.addEventListener('click', refreshBox);
}

// 박스 색상 변경
function changeBox() {
//   for (let i = 0; i <= count; i++) {
//     const target = document.querySelector(`.box--${i}`);
//     target.style.backgroundColor = getRandomColor();
//   }
  let targets = document.querySelectorAll('.box');
  for (let i = 0; i <= targets.length; i++) {
    targets[i].style.backgroundColor = getRandomColor();      
  }
}

// 박스 클릭 시 이벤트 설정
function refreshBox() {
  const target = event.srcElement;
  if (target.style.zIndex >= z) {
    rootNode.removeChild(target);
    z--;
  } else {
    target.style.zIndex = ++z;
  }
}

// 페이지 로드 시 박스 생성. Anonymous function 사용
window.onload = function() {
  for (let i = 0; i <= loadBoxCount; i++) {
    event.initEvent(addBox(), true, true);
  }
}

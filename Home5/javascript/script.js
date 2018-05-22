let count = 0;

const rootNode = document.querySelector('#root');

document.querySelector('.add-box').addEventListener('click', addBox);

document.querySelector('.change-color').addEventListener('click', changeBox);

function getRandomColor() {
  let hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}

function addBox() {
  let box = document.createElement('div');
  let randomTopPosition = Math.floor(Math.random() * 460 + 80);
  let randomLeftPosition = Math.floor(Math.random() * 640);

  //dynamic
  box.classList.add('box',`box--${count}`);
  box.style.backgroundColor = getRandomColor();
  box.style.top = `${randomTopPosition}px`;
  box.style.left = `${randomLeftPosition}px`;
  box.style.zIndex = count;

  //append box
  rootNode.appendChild(box);

  box.addEventListener('click', refreshBox);
  
  count++;
}

// 박스 색상 변경
// function changeBox() {
//   for (let i = 0; i <= count; i++) {
//     const target = document.querySelector(`.box--${i}`);
//     target.style.backgroundColor = getRandomColor();
//   }
// }
function changeBox() {
  let targets = document.querySelectorAll('.box');
  for (let i = 0; i <= targets.length; i++) {
    if (targets[i]) {
      targets[i].style.backgroundColor = getRandomColor();      
    }
  }
}

// 박스 클릭 시 이벤트 설정
function refreshBox() {
  const target = event.srcElement;
  if (target.style.zIndex >= count) {
    rootNode.removeChild(target);
  }
  target.style.zIndex = count;
}
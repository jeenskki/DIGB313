let count = 0;

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
  let randomTopPosition = Math.floor(Math.random() * 460 + 80);
  let randomLeftPosition = Math.floor(Math.random() * 640);

  // dynamic
  box.classList.add('box',`box--${count}`);
  box.style.backgroundColor = getRandomColor();
  box.style.top = `${randomTopPosition}px`;
  box.style.left = `${randomLeftPosition}px`;
  box.style.zIndex = count;

  // append box
  rootNode.appendChild(box);

<<<<<<< HEAD
=======
  count++;
  
  // on-click event
>>>>>>> 8a7771a8e331da7bd2162f3c01632f5b0fa4540d
  box.addEventListener('click', refreshBox);
  
  count++;
}

<<<<<<< HEAD
// 박스 색상 변경
// function changeBox() {
//   for (let i = 0; i <= count; i++) {
//     const target = document.querySelector(`.box--${i}`);
//     target.style.backgroundColor = getRandomColor();
//   }
// }
=======
// 박스 색상 변경. 박스 제거 후 이벤트 오작동
>>>>>>> 8a7771a8e331da7bd2162f3c01632f5b0fa4540d
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
<<<<<<< HEAD
}
=======
  count++;
}
>>>>>>> 8a7771a8e331da7bd2162f3c01632f5b0fa4540d

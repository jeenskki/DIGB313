function getRandomColor() {
  let hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}

let count = 0;
const rootNode = document.querySelector('#root');

document.querySelector('.add-box').addEventListener('click', addBox);

document.querySelector('.change-color').addEventListener('click', changeBox);

function addBox() {
  let box = document.createElement('div');
  let randomTopPosition = Math.floor(Math.random() * 540);
  let randomLeftPosition = Math.floor(Math.random() * 640);

  //dynamic
  box.classList.add('box',`box--${count}`);
  box.style.backgroundColor = getRandomColor();
  box.style.top = `${randomTopPosition}px`;
  box.style.left = `${randomLeftPosition}px`;
  box.style.zIndex = count;
  
  //append box
  document.getElementById('root').appendChild(box);

  count++;

  box.addEventListener('click', refreshBox);
}

function changeBox() {
  for (let i = 0; i < count; i++) {
    const target = document.querySelector(`.box--${i}`);
    target.style.backgroundColor = getRandomColor();
  }
}

function refreshBox() {
  const target = event.srcElement;
  if (target.style.zIndex >= count) {
    rootNode.removeChild(target);
  }
  target.style.zIndex = count + 1;
}
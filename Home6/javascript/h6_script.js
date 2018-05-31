let count = 0;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

$('.add-box').click(() => {
  const box = document.createElement('div');
  const ranTop = Math.floor((Math.random() * 320) + 80);
  const ranLeft = Math.floor((Math.random() * 650) + 5);
  $(box).css({
    backgroundColor: getRandomColor(),
    top: ranTop,
    left: ranLeft,
    zIndex: 0
  }).addClass(`box no.${count}`);
  $('#root').append(box);
  count += 1;
});

$('.change-color').click(() => {
  const targets = document.querySelectorAll('.box');
  for (let i = 0; i <= targets.length; i++) {
    $(targets[i]).css('backgroundColor', getRandomColor());
  }
});

$(document).ready(() => {
  const loadBox = Math.floor((Math.random() * 21) + 30);
  for (let i = 0; i <= loadBox; i++) {
    $('.add-box').trigger('click');
  }
  $dragging = null;

  $(document.body).on('mousemove', (e) => {
    if ($dragging) {
      $dragging.offset({
        top: e.pageY,
        left: e.pageX
      });
    }
  });
  $(document.body).on('mousedown', '.box', (e) => {
    $dragging = $(e.target);
  });
  $(document.body).on('mouseup', '.box', (e) {
    $dragging = null;
  });
});

$(document).on('click', '.box', (e) => {
  const z = 100;
  if ($(e.target).css('zIndex') >= z) {
    $(e.target).remove();
  } else {
    $(e.target).css('zIndex', z);
  }
});

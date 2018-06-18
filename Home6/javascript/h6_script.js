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
});

$(document).on('click', '.box', (e) => {
  const z = 100;
  if ($(e.target).css('zIndex') >= z) {
    $(e.target).remove();
  } else {
    $(e.target).css('zIndex', z);
  }
// });

// $.fn.drags = function (opt) {
//   opt = $.extend({ handle: '', cursor: 'move' }, opt);

//   if (opt.handle === '') {
//     var $el = this;
//   } else {
//     var $el = this.find(opt.handle);
//   }

//   return $el.css('cursor', opt.cursor).on('mousedown', function (e) {
//     if (opt.handle === '') {
//       var $drag = $(this).addClass('draggable');
//     } else {
//       var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
//     }
//     let z_idx = $drag.css('z-index'),
//       drg_h = $drag.outerHeight(),
//       drg_w = $drag.outerWidth(),
//       pos_y = $drag.offset().top + drg_h - e.pageY,
//       pos_x = $drag.offset().left + drg_w - e.pageX;
//     $drag.css('z-index', 1000).parents().on('mousemove', (e) => {
//           $('.draggable').offset({
//               top:e.pageY + pos_y - drg_h,
//               left:e.pageX + pos_x - drg_w
//           }).on("mouseup", function() {
//               $(this).removeClass('draggable').css('z-index', z_idx);
//           });
//       });
//     e.preventDefault(); // disable selection
//   }).on('mouseup', function () {
//     if (opt.handle === '') {
//       $(this).removeClass('draggable');
//     } else {
//       $(this).removeClass('active-handle').parent().removeClass('draggable');
//     }
//   });
// };

// $('.box').drags();
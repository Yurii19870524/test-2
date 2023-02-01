// const selectSingle__room = document.querySelector('. __select__room');
// const selectSingle__room__title = selectSingle.querySelector(
//   '. __select__room__title'
// );
// const selectSingle__room__label = selectSingle.querySelectorAll(
//   '. __select__room__label'
// );

// // Toggle menu
// selectSingle__room__title.addEventListener('click', () => {
//   if ('active' === selectSingle__room.getAttribute('data-state')) {
//     selectSingle__room.setAttribute('data-state', '');
//   } else {
//     selectSingle__room.setAttribute('data-state', 'active');
//   }
// });

// // Close when click to option
// for (let i = 0; i < select__room__labelSingle.length; i++) {
//   selectSingle__room__label[i].addEventListener('click', evt => {
//     selectSingle__room__title.textContent = evt.target.textContent;
//     selectSingle__room.setAttribute('data-state', '');
//   });
// }

// // Reset title
// const reset_t = document.querySelector('.reset_t');
// reset_t.addEventListener('click', () => {
//   selectSingle__room__title.textContent =
//     selectSingle__room__title.getAttribute('data-default');
// });

// test2

const selectSingle = document.querySelector('.__select ');
const selectSingle_title = selectSingle.querySelector('.__select__title ');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', evt => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

// Reset title
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
  selectSingle_title.textContent =
    selectSingle_title.getAttribute('data-default');
});

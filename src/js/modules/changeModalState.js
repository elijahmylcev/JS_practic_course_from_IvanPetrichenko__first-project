import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  function bindActionToElements(event, element, property) {
    element.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            state[property] = i;
            break;
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              i === 0 ? (state[property] = 'Холодное') : (state[property] = 'Теплое');
              element.forEach((box, j) => {
                box.checked = false;
                if (i == j) {
                  box.checked = true;
                }
              });
            } else {
              state[property] = item.value;
            }
            break;
          case 'SELECT':
            state[property] = item.value;
            break;
        }

        console.log(state);
      });
    });
  }

  bindActionToElements('click', windowForm, 'form');
  bindActionToElements('input', windowHeight, 'height');
  bindActionToElements('input', windowWidth, 'width');
  bindActionToElements('change', windowType, 'type');
  bindActionToElements('change', windowProfile, 'profile');
};

export default changeModalState;

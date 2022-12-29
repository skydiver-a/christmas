import ContentModal from './ContentModal.js';
import { data } from './Data.js';

window.onload = function() {

  addTileClickHandler();

  setInterval(addClocksHandler, 1000);

  addClocksHandler();
}

const addTileClickHandler = () => {
  const days = Array.from(document.querySelectorAll('.day'));

  days.forEach(item => {
    item.addEventListener('click', () => {
      renderModalWindow(data[item.dataset.index]);
    });
  });
}

const renderModalWindow = (data) => {
  let modalWindow = new ContentModal('modal', data);
  modalWindow.renderModal();
}

const addClocksHandler = () => {
  const hourHand = document.querySelectorAll('.hours'),
        minuteHand = document.querySelectorAll('.minutes');
  const date = new Date(),
        minutes = date.getMinutes(),
        hours = date.getHours();
  const minutesDegrees = ((minutes / 60) * 360),
        hoursDegrees = ((hours / 12) * 360);

  hourHand.forEach(item => { item.style.transform = `rotate(${hoursDegrees}deg)`; });
  minuteHand.forEach(item => { item.style.transform = `rotate(${minutesDegrees}deg)`; });
}
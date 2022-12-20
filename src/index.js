import ContentModal from './ContentModal.js';

const data = [
  {
    title: "Christmas bauble",
    description: "decorates Christmas tree."
  },
  {
    title: "Christmas tree",
    description: "is an evergreen tree decorated with lights and ornaments."
  },
  {
    title: "Gingerbread man",
    description: "is a biscuit cookie made from gingerbread, usually in the shape of a man."
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
  {
    title: "Christmas bauble",
    description: ""
  },
]

window.onload = function() {
  addWindowClickHandler();

  setInterval(addClocksHandler, 1000);

  addClocksHandler();
}

const addWindowClickHandler = () => {
  const daysArray = document.querySelectorAll('.day');

  daysArray.forEach(item => {
    item.addEventListener('click', () => {
      renderModalWindow(item.querySelector('svg'), data[item.dataset.index]);
    });
  });
}

const renderModalWindow = (image, data) => {
  let modalWindow = new ContentModal('modal', image, data);
  modalWindow.renderModal();
}

const addClocksHandler = () => {
  const hourHand = document.querySelector('#hours'),
        minuteHand = document.querySelector('#minutes');
  const date = new Date(),
        minutes = date.getMinutes(),
        hours = date.getHours();
  const minutesDegrees = ((minutes / 60) * 360),
        hoursDegrees = ((hours / 12) * 360);

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
}
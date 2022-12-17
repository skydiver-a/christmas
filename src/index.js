import Modal from './Modal.js';

const data = [
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
      renderModalWindow(); // data[item.dataset.index] , item.querySelector('svg')
    });
  });
}

const renderModalWindow = (content) => {
  let modalWindow = new Modal('modal');
  modalWindow.build(content);
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
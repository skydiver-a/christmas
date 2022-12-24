import ContentModal from './ContentModal.js';

const data = [
  {
    svg: '<svg width="240" height="240" viewBox="-200 -200 400 400"><circle cx="0" cy="40" r="140" fill="#D1495B" /><circle cx="0" cy="-150" r="24" fill="none" stroke="#F79257" stroke-width="4" /><rect x="-35" y="-130" width="70" height="40" fill="#F79257" /></svg>',
    title: "Christmas bauble",
    description: "decorates Christmas tree."
  },
  {
    svg: '',
    title: "Christmas tree",
    description: "is an evergreen tree decorated with lights and ornaments."
  },
  {
    svg: '',
    title: "Gingerbread man",
    description: "is a biscuit cookie made from gingerbread, usually in the shape of a man."
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
  {
    svg: '',
    title: "Christmas bauble",
    description: ""
  },
]

window.onload = function() {
  const days = Array.from(document.querySelectorAll('.day')),
        svgs = Array.from(document.querySelectorAll('svg'));

  addTileClickHandler(days, svgs);

  setInterval(addClocksHandler, 1000);

  addClocksHandler();
}

const addTileClickHandler = (days) => {
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
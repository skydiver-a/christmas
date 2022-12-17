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

  const date = new Date();

  setTimeout(() => {
    const hr = date.getHours() % 12;
    const min = date.getMinutes();
    hourHand.style.transform = "rotate(" + ((360 / 12) * hr) + "deg)";
    minuteHand.style.transform = "rotate(" + ((360 / 60) * min) + "deg)";
  }, 1000);
}
export default class Modal {
  constructor(classes) {
    this.classes = classes;
    this.overlay = "";
    this.modal = "";
    this.modalImage = "";
    this.modalContent = "";
    this.modalCloseBtn = "";
    this.isPlay = false;
  }

  build(content, image) {
    // overlay
    this.overlay = this.createDOMNode(this.overlay, 'div', 'overlay');
    // modal
    this.modal = this.createDOMNode(this.modal, 'div', this.classes);
    // modal content
    this.modalContent = this.createDOMNode(this.modalContent, 'div', 'modal_content');
    this.modalImage = this.createDOMNode(this.modalImage, 'div', 'modal_img-container');
    // modal close button
    this.modalCloseBtn = this.createDOMNode(this.modalCloseBtn, 'button', 'modal_close-button');
    this.modalCloseBtn.innerHTML = '<span class="close">&#10005;</span>';
    // set and append content & image
    this.setContent(content);
    this.appendModalElements(image);
    // open modal
    this.openModal();
    // bind events
    this.bindEvents();
  }

  bindEvents() {
    if (this.modalImage.querySelector('.music-sign')) {
      const carol = document.createElement('audio');
      carol.src = `src/Ring_Christmas_Bells.mp3`;
      this.modalImage.addEventListener('click', () => {
        if (this.isPlay == false) {
          carol.play();
          this.isPlay = true;
        } else {
          carol.pause();
          this.isPlay = false;
        }
      });
    }
    this.modalCloseBtn.addEventListener('click', this.closeModal);
    this.overlay.addEventListener('click', this.closeModal);
  }

  openModal() {
    document.body.append(this.overlay);
  }

  closeModal(e) {
    let classes = e.target.classList;
    if (classes.contains('overlay') || classes.contains('modal_close-button') || classes.contains('close')) {
      try {
        document.querySelector('.overlay').remove()
      } catch (e) {}
    }
  }

  createDOMNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  setContent(content) {
    if (typeof content === 'string') {
      this.modalContent.innerHTML = content;
    } else {
      this.modalContent.innerHTML = '';
      this.modalContent.appendChild(content);
    }
  }

  appendModalElements(image) {
    this.modal.append(this.modalCloseBtn);
    this.modalImage.innerHTML = image;
    this.modalContent.append(this.modalImage);
    this.modal.append(this.modalContent);
    this.overlay.append(this.modal);
  }
}
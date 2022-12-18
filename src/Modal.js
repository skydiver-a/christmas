export default class Modal {
  constructor(classes) {
    this.classes = classes;
    this.overlay = "";
    this.modal = "";
    this.modalImage = "";
    this.modalContent = "";
    this.modalCloseBtn = "";
  }

  build(content) {
    // overlay
    this.overlay = this.createDOMNode(this.overlay, 'div', 'overlay');
    // modal
    this.modal = this.createDOMNode(this.modal, 'div', this.classes);
    // modal content
    this.modalImage = this.createDOMNode(this.modalImage, 'div', 'modal_img-container');
    this.modalContent = this.createDOMNode(this.modalContent, 'div', 'modal_content');
    // modal close button
    this.modalCloseBtn = this.createDOMNode(this.modalCloseBtn, 'button', 'modal_close-button');
    this.modalCloseBtn.innerHTML = '<span>&#10005;</span>';
    this.setContent(content);
    this.appendModalElements();
    // bind events
    this.bindEvents();
    // open modal
    this.openModal();
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

  appendModalElements() {
    this.modal.append(this.modalImage);
    this.modal.append(this.modalContent);
    this.modal.append(this.modalCloseBtn);
    this.overlay.append(this.modal);
  }

  bindEvents() {
    this.modalCloseBtn.addEventListener('click', this.closeModal);
    this.overlay.addEventListener('click', this.closeModal);
  }

  openModal() {
    document.body.append(this.overlay);
  }

  closeModal(e) {
    let classes = e.target.classList;
    if (classes.contains('overlay') || classes.contains('modal_close-button')) {
      document.querySelector('.overlay').remove();
    }
  }
}
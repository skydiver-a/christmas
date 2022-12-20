import Modal from './Modal.js';

export default class ContentModal extends Modal {
  constructor(classes, image, {title, description}) {
    super(classes);
    this.image = image;
    this.title = title;
    this.description = description;
  }

  generateContent() {
    return;
  }

  renderModal() {
    let content = this.generateContent();
    super.build(content);
  }
}
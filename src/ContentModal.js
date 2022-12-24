import Modal from './Modal.js';

export default class ContentModal extends Modal {
  constructor(classes, {svg, title, description}) {
    super(classes);
    this.image = svg;
    this.title = title;
    this.description = description;
  }

  generateContent() {
    let template = "";
    template += `
    <div class='modal_article'>
      <div class='modal_article-heading'>
        <h3 class='modal__heading_title'>${this.title}</h3>
      </div>
      <div class='modal_article-description'>
        <p class='modal_article-description_text'>${this.description}</p>
      </div>
    </div>`;

    return template;
  }

  renderModal() {
    let content = this.generateContent();
    super.build(content, this.image);
  }
}
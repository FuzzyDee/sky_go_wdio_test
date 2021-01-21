export default class ModalComponent {
  constructor(element) {
    this.element = element;
  }

  //   get header() {
  //     return this.element.$("h3").getText();
  //   }
  //   get content() {
  //     return this.element.$("p").getText();
  //   }

  frame() {
    return this.element.$("//iframe[contains(@src,'message_id=207015')]");
  }

  get agree() {
    return this.element.$(
      "//button[contains(@class,'message-component message-button no-children')][2]"
    );
  }
}

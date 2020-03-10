import keyCheck from "./keyCheck";
import focusElements from "./focusElements";
class Modal {
  constructor(elements, modal) {
    this.elements = elements;
    this.modal = modal;
    this.bindings();
  }

  bindings() {
    const close = document.querySelector(".js-modal-close");

    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].addEventListener("click", e => this.toggleModal(modal));

      // this.elements[i].addEventListener(
      //   "keydown",
      //   event => new keyCheck(event)
      //   // event.keyCode === 32 ? this.triggerModal(modal, close): null,
      // );

      // this.elements[i].addEventListener("keydown", event =>
      //   event.keyCode === 32 ? this.triggerModal(modal, close) : null
      // );

      // this.elements[i].addEventListener(
      //   "keydown",
      //   event => (event.keyCode === 27 ? this.toggleModal(modal) : null),
      //   this.elements[i].focus()
      // );
    }

    close.addEventListener("click", e => this.toggleModal(modal));

    // window.addEventListener("keydown", event =>
    //   event.keyCode === 32 ? this.toggleModal(modal, close) : null
    // );
    // window.addEventListener("keydown", event =>
    //   event.keyCode === 27 ? this.toggleModal(modal) : null
    // );
    // window.addEventListener("keydown", event =>
    //   event.keyCode === 32 ? this.toggleModal(modal) : null
    // );
  }

  toggleModal(modal) {
    if (modal.classList.contains("is-active")) {
      modal.classList.remove("is-active");
    } else {
      modal.classList.add("is-active");
      // modal.addEventListener("keydown", trapTabKey);
    }

    new focusElements(modal);

    // function trapTabKey(e) {
    //   // Check for TAB key press
    //   e.preventDefault();
    //   if (e.keyCode === 9) {
    //     // SHIFT + TAB
    //     if (e.shiftKey) {
    //       if (document.activeElement === firstTabStop) {
    //         lastTabStop.focus();
    //       }

    //       // TAB
    //     } else {
    //       if (document.activeElement === lastTabStop) {
    //         firstTabStop.focus();
    //       }
    //     }
    //   }
    // }
  }
}

const modalTrigger = document.querySelectorAll(".js-modal-trigger");
const modal = document.querySelector(".js-modal");
new Modal(modalTrigger, modal);

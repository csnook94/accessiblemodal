import keyCheck from "./keyCheck";
class focusElements {
  constructor(modal) {
    this.modal = modal;
    console.log(modal);
    this.focusableElementsString =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    this.bindings();
  }

  bindings() {
    const focusableElements = this.modal.querySelectorAll(
      this.focusableElementsString
    );

    if (focusableElements.length === 0) return;

    const firstTabStop = focusableElements[0];
    const lastTabStop = focusableElements[focusableElements.length - 1];
    firstTabStop.focus();
    window.addEventListener("keydown", event => {
      this.trapTabKey(firstTabStop, lastTabStop, new keyCheck(event), event);
    });
  }

  trapTabKey(firstTabStop, lastTabStop, keyCheck, event) {
    if (keyCheck.action === "Focus") {
      if (document.activeElement === lastTabStop) {
        event.preventDefault();
        firstTabStop.focus();
      }
    }
  }
}

export default focusElements;

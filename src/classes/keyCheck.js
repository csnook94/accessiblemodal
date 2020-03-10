const KEYCODES = {
  ESCAPE: 27,
  ENTER: 13,
  SPACE: 32,
  TAB: 9
};

const keyCheck = event => {
  switch (event.keyCode) {
    case KEYCODES.ESCAPE:
      return {action : "Close"};
    case KEYCODES.ENTER:
      return {action : "Open"};
    case KEYCODES.TAB:
      return {action : "Focus"};
    case KEYCODES.SPACE:
      return {action : "Open"};
    default:
      break;
  }
};
export default keyCheck;

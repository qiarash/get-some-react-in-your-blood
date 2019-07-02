export default function Modal(state, action) {

  if (action.type === "OPEN_MODAL") {
    return Object.assign({}, state, {
      open: true
    });
  } else if (action.type === "CLOSE_MODAL" || typeof state === 'undefined') {
    return Object.assign({}, state, {
      open: false
    })
  }
  return state
}
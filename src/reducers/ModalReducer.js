export default function Modal(state, action) {

  if (action.type === "OPEN_MODAL") {
    return Object.assign({}, state, {
      isActive: true
    });
  } else if (action.type === "CLOSE_MODAL" || typeof state === 'undefined') {
    return Object.assign({}, state, {
      isActive: false
    })
  }
  return state
}
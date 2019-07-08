export default function Modal(state={isActive:false, transitionIn:false}, action) {
  
  if (action.type === "OPEN_MODAL") {
    return Object.assign({}, state, {
      isActive: true,
      transitionIn:true,
    });
  } else if (action.type === "CLOSE_MODAL" || typeof state === 'undefined') {
    return Object.assign({}, state, {
      isActive: false,
      transitionIn: false,
    })
  }
  return state
}
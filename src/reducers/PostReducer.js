export default function Post(state = {id:1}, action) {
  console.log(action);
  console.log(state);
  if (action.type === "GO_FORWARD") {
    return Object.assign({}, state, {
      id : state.id+action.amount
    });
  } else if (action.type === "GO_BACKWARDS" || typeof state === 'undefined') {
    return Object.assign({}, state, {
      id : state.id - action.amount
    })
   } else if (action.type === "GO_FORWARD_EXACT") {
    return Object.assign({}, state, {
      id : action.amount
    })
  }
  return state
}
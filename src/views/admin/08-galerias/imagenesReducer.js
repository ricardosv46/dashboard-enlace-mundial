export const imagenesReducer = (state = [], action) => {
  switch (action.type) {
    case 'addImage':
      return [...state, action.payload]
    case 'resetImage': return []
    default:
      return state
  }
}

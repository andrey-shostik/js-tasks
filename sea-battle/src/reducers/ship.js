const initialState = {};

export default function getRoomPlayers(state = initialState, action) {
  if (action.type === 'SET_SIZE') {
    if (action.peoples) {
      return action.peoples;
    }
  }
  return state;
}

const initialState = [
];

export default function getRoomPlayers(state = initialState, action) {
  if (action.type === 'GET_ROOM_PLAYERS') {
    if (action.peoples) {
      return action.size;
    }
  }
  return state;
}

const initialState = [
  {
    sockets: { 'H5i_ALAr4JtJeMejAAAA': true },
    length: 1
  }
];

export default function getRoomPlayers(state = initialState, action) {
  if (action.type === 'GET_ROOM_PLAYERS') {
    return [
      sockets: { 'H5i_ALAr4JtJeMejAAAA': true },
      length: 1
    ];
  }
  console.log(action);
}

export const initialState = {
  token:
    "BQAgclN00RoMYbIUPPiI5vQc7j5B2yTSVXhqIZq7eJ9tjLsCyOj19uc64RzdwcrwBhc5bgFkpr3hA-emLfywjEajQHkPXH7g3HJInbumNOVXNp4gTy3S5yH6KXBL2QANB7ch5-b6SxNq-W2uxsC2Hr1j080gMk2bUGvxKbQmlCNUauaZuLiE",
  user: null,
  playlists: [],
  playing: [],
  item: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_PLAYLISTS":
      return { ...state, playlists: action.playlists };
    default:
      return state;
  }
};

export default reducer;

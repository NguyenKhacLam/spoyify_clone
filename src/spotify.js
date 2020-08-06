export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUrl = "http://localhost:3000/";

const clientId = "fe533f806c084a6d853c2dc84e27502b";

const scope = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let part = item.split("=");
      initial[part[0]] = decodeURIComponent(part[1]);
      return initial;
    }, {});
};

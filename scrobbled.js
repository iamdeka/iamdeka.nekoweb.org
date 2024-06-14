//max.nekoweb.org and lel.nekoweb.org
let socket = new WebSocket(
  "wss://scrobbled.tepiloxtl.net/ws/get_last_track/iamdeka",
);
socket.onopen = function (e) {
  console.log("[open] Scrobbled WS connected");
};
socket.onmessage = function (event) {
  data = JSON.parse(event.data);
  let song = document.querySelector('#song');
  song.innerHTML = data["recenttracks"]["track"][0]["name"] + ' - ' + data["recenttracks"]["track"][0]["artist"]["name"];
};
socket.onclose = function (event) {
  if (event.wasClean) {
    console.log(
      `[closed] WS closed cleanly, code=${event.code} reason=${event.reason}`,
    );
  } else {
    console.log("[closed] WS connection died");
  }
};
socket.onerror = function (error) {
  console.log(`[error]`);
};
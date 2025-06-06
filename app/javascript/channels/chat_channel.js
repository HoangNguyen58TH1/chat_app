import consumer from "./consumer"

consumer.subscriptions.create("ChatChannel", {
  connected() {
    console.log("Connected to ChatChannel")
  },

  received(data) {
    const messagesDiv = document.getElementById("messages");
    messagesDiv.insertAdjacentHTML("beforeend", `<p>${data.content}</p>`);
  }
});

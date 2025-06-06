// This place the browser "listen" and receive data real-time from server.
import consumer from "./consumer"

consumer.subscriptions.create("ChatChannel", {
  connected() {
    console.log('--- chat_channel.js 111 ---')
    console.log("Connected to ChatChannel")
  },

  received(data) {
    console.log('--- chat_channel.js 222 ---')
    console.log("Receive data:", data)
    const messagesDiv = document.getElementById("messages");
    messagesDiv.insertAdjacentHTML("beforeend", `<p>${data.content}</p>`);
  }
});

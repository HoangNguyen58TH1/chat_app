// This place the browser "listen" and receive data real-time from server.
import consumer from "./consumer"

const chatChannel = consumer.subscriptions.create("ChatChannel", {
  connected() {
    console.log("Connected to ChatChannel in chat_channel.js");
  },

  received(data) {
    console.log("Received data:", data);
    const messagesDiv = document.getElementById("messages");
    if (messagesDiv) {
      messagesDiv.insertAdjacentHTML("beforeend", `<p>${data.content}</p>`);
    }
  },

  speak(content) {
    console.log("Sending message:", content);
    return this.perform('speak', { content: content });
  }
});

// Make chatChannel available globally
window.chatChannel = chatChannel;
console.log("chatChannel has been created and attached to window object");

export default chatChannel;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("message_form");

  if (!form) return;

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log(">> chat.js loaded 111");
    const content = document.getElementById("message_content").value;
    console.log(">> chat.js loaded 222");

    fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content
      },
      body: JSON.stringify({
        message: { content: content }
      })
    }).then(response => {
      if (response.ok) {
        console.log("Message sent");
      } else {
        console.error("Failed to send message");
      }
    });

    document.getElementById("message_content").value = "";
  });
});

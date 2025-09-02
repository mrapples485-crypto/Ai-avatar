const messages = document.getElementById("messages");
const userInput = document.getElementById("userInput");

function addMessage(sender, text) {
  const div = document.createElement("div");
  div.textContent = sender + ": " + text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

userInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter" && userInput.value.trim() !== "") {
    const text = userInput.value.trim();
    addMessage("You", text);
    userInput.value = "";

    // Mock AI response
    setTimeout(() => {
      addMessage("AI", "I heard you say: " + text);
    }, 1000);
  }
});

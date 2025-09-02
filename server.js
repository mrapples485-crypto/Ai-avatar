// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Simple AI memory store (you can replace with DB later)
let memory = [];

// Endpoint: respond to user
app.post("/chat", (req, res) => {
  const userMessage = req.body.message || "";
  
  // Basic logic (expand later with AI model or API)
  let response = "I’m just learning… tell me more!";
  if (userMessage.toLowerCase().includes("hello")) {
    response = "Hi there 👋 I’m your AI avatar!";
  } else if (userMessage.toLowerCase().includes("how are you")) {
    response = "I feel great walking around your screen 😄";
  }

  // Save to memory
  memory.push({ user: userMessage, ai: response });

  res.json({ reply: response });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

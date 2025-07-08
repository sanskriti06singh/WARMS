// script.js

// Get the menu icon and the nav links container
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav__links');

// Add a click event listener to the menu icon
menuIcon.addEventListener('click', () => {
  // Toggle the 'active' class to show or hide the nav links
  navLinks.classList.toggle('active');
});


const chatbotIcon = document.getElementById('chatbotIcon');
const chatbox = document.getElementById('chatbox');
const closeChatbox = document.getElementById('closeChatbox');
const sendMessage = document.getElementById('sendMessage');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');

chatbotIcon.addEventListener('click', () => {
  chatbox.classList.toggle('active');
});

closeChatbox.addEventListener('click', () => {
  chatbox.classList.remove('active');
});

sendMessage.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message) {
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.textContent = message;
    userMessage.style.cssText =
      'text-align: right; background: #f39c12; color: white; padding: 0.5rem; margin: 0.5rem 0; border-radius: 10px;';
    chatMessages.appendChild(userMessage);

    // Add bot reply
    const botReply = document.createElement('div');
    botReply.textContent = "Thanks for your message. We'll get back to you shortly.";
    botReply.style.cssText =
      'text-align: left; background: #eee; padding: 0.5rem; margin: 0.5rem 0; border-radius: 10px;';
    chatMessages.appendChild(botReply);

    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatInput.value = '';
  }
});

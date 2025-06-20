document.addEventListener('DOMContentLoaded', function () {
  // Get references to DOM elements
  const chatListContainer = document.getElementById('chatListContainer');
  const chatWindowContainer = document.getElementById(
    'chatWindowContainer'
  );
  const chatList = document.getElementById('chatList'); // Though not directly used for its children in this version, good to have.
  const backButton = document.getElementById('backButton');
  const chatWindowTitle = document.getElementById('chatWindowTitle');

  const chatItems = [
    document.getElementById('chat-1'),
    document.getElementById('chat-2'),
  ];

  // Event Listener for Chat Items
  chatItems.forEach((item) => {
    if (item) {
      item.addEventListener('click', function () {
        // Hide chatListContainer
        chatListContainer.classList.add('hidden');
        // Show chatWindowContainer
        chatWindowContainer.classList.remove('hidden');

        // Get username from the clicked chat item
        const username = item.querySelector('h3').innerText;
        // Update chatWindowTitle
        chatWindowTitle.innerText = 'Chat with ' + username;

        // Optional: Scroll to top of messages
        const chatMessages = document.getElementById('chatMessages');
        if (chatMessages) {
          chatMessages.scrollTop = 0;
        }
      });
    }
  });

  // Event Listener for "Back" Button
  if (backButton) {
    backButton.addEventListener('click', function () {
      // Hide chatWindowContainer
      chatWindowContainer.classList.add('hidden');
      // Show chatListContainer
      chatListContainer.classList.remove('hidden');
    });
  }
  setupMessageSending(); // Added this line
});

// Establish WebSocket connection
const socket = new WebSocket("ws://localhost:8080");

// Handle connection open event
socket.addEventListener("open", () => {
  console.log("WebSocket connection opened.");
});

// Function to display a message in the chat window
function displayMessage(text, sender) {
  const messagesContainer = document.getElementById("chatMessages");
  if (!messagesContainer) {
    console.error("Chat messages container 'chatMessages' not found.");
    return;
  }

  const messageElement = document.createElement("div");
  messageElement.textContent = text;

  // Common classes for all messages
  messageElement.classList.add(
    "p-3",
    "rounded-lg",
    "max-w-xs",
    "lg:max-w-md",
    "shadow",
    "mb-2" // Added margin for spacing between messages
  );

  if (sender === "user") {
    // Styling for user's messages (sent by the current user)
    messageElement.classList.add("bg-blue-500", "text-white", "ml-auto");
  } else if (sender === "remote") {
    // Styling for remote messages (received from the other party)
    messageElement.classList.add("bg-gray-200", "text-gray-800", "mr-auto");
} else if (sender === "system") {
    // Styling for system messages (errors, connection status)
    messageElement.classList.add("bg-red-100", "text-red-700", "text-sm", "italic", "text-center", "w-full", "mx-auto");
    messageElement.style.maxWidth = "100%"; // Ensure it spans wider if needed
  } else {
    // Styling for remote messages (received from the other party)
    messageElement.classList.add("bg-gray-200", "text-gray-800", "mr-auto");
  }

  messagesContainer.appendChild(messageElement);

  // Scroll to the bottom of the messages container
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Handle incoming messages
socket.addEventListener("message", event => {
  if (typeof event.data === 'string') {
    displayMessage(event.data, "remote");
  } else {
    console.warn("Received non-string message from WebSocket:", event.data);
    // Handle binary data if necessary, e.g. by converting to string or processing otherwise
    // For now, we'll try to convert it to string if it's a Blob
    if (event.data instanceof Blob) {
      const reader = new FileReader();
      reader.onload = function() {
        displayMessage(reader.result, "remote");
      };
      reader.onerror = function() {
        console.error("Error reading Blob data:", reader.error);
      };
      reader.readAsText(event.data);
    }
  }
});

// Handle WebSocket errors
socket.addEventListener("error", error => {
  console.error("WebSocket Error:", error);
  // Optionally, display an error message to the user in the chat window
  displayMessage("Error connecting to chat. Please try again later.", "system");
});

// Handle WebSocket connection close
socket.addEventListener("close", event => {
  console.log("WebSocket connection closed:", event.reason, "Code:", event.code);
  // Optionally, display a message to the user
  if (event.wasClean) {
    displayMessage(`Connection closed cleanly: ${event.reason || 'No reason given'}`, "system");
  } else {
    displayMessage("Connection died. Refresh the page to try reconnecting.", "system");
  }
  // Here you might want to disable the message input field
  const messageInput = document.querySelector("#chatInput input[type='text']");
  const sendButton = document.querySelector("#chatInput button");
  if (messageInput) messageInput.disabled = true;
  if (sendButton) sendButton.disabled = true;
});

// Handle Outgoing Messages
// Note: This assumes the DOM elements for chat input are available when this script runs.
// If using DOMContentLoaded, ensure this part is within that listener or called after DOM is ready.

// We'll wrap this part in a function to be called after DOM content is loaded,
// as the UI elements might not be immediately available.
function setupMessageSending() {
  const messageInputField = document.querySelector("#chatInput input[type='text']");
  const sendButton = document.querySelector("#chatInput button");

  if (!messageInputField) {
    console.error("Message input field not found.");
    return;
  }
  if (!sendButton) {
    console.error("Send button not found.");
    return;
  }

  function sendMessage() {
    const messageText = messageInputField.value.trim();
    if (messageText) {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(messageText);
        displayMessage(messageText, "user");
        messageInputField.value = ""; // Clear the input field
      } else {
        console.error("WebSocket is not open. ReadyState:", socket.readyState);
        displayMessage("Cannot send message: Connection is not open.", "system");
      }
    }
  }

  sendButton.addEventListener("click", sendMessage);

  messageInputField.addEventListener("keypress", event => {
    // Check if Enter key was pressed (and not Shift+Enter, etc.)
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent default action (like form submission or new line)
      sendMessage();
    }
  });
}

// The actual call to setupMessageSending will be done inside or after
// the DOMContentLoaded listener that will be moved in the next step.
// For now, this defines the function.

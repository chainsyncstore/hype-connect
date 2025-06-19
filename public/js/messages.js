document.addEventListener('DOMContentLoaded', function () {
            // Get references to DOM elements
            const chatListContainer = document.getElementById('chatListContainer');
            const chatWindowContainer = document.getElementById('chatWindowContainer');
            const chatList = document.getElementById('chatList'); // Though not directly used for its children in this version, good to have.
            const backButton = document.getElementById('backButton');
            const chatWindowTitle = document.getElementById('chatWindowTitle');

            const chatItems = [
                document.getElementById('chat-1'),
                document.getElementById('chat-2')
            ];

            // Event Listener for Chat Items
            chatItems.forEach(item => {
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
        });

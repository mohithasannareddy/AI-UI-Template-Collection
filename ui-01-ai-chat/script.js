function sendMessage() {

    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    // Add user's message
    const userMessage = document.createElement("div");
    userMessage.className = "message user-message";

    userMessage.innerHTML = `
        <strong>You:</strong>
        <span>${message}</span>
    `;

    chatBox.appendChild(userMessage);

    // Clear input
    input.value = "";

    // Create AI response
    setTimeout(function () {

        const botMessage = document.createElement("div");
        botMessage.className = "message bot-message";

        botMessage.innerHTML = `
            <strong>AI:</strong>
            <span>That's an interesting question! I'm here to help you.</span>
        `;

        chatBox.appendChild(botMessage);

        // Scroll to latest message
        chatBox.scrollTop = chatBox.scrollHeight;

    }, 500);

    // Scroll to latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}


// Allow Enter key to send message
document.getElementById("userInput").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});

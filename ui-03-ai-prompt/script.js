function generateResponse() {

    const promptInput = document.getElementById("promptInput");
    const responseBox = document.getElementById("responseBox");

    const prompt = promptInput.value.trim();

    if (prompt === "") {
        responseBox.innerHTML = `
            <strong>AI Response:</strong>
            <p>Please enter a prompt first.</p>
        `;
        return;
    }

    responseBox.innerHTML = `
        <strong>AI Response:</strong>
        <p>Thanks for your prompt! Here's a helpful response to your question.</p>
    `;
}

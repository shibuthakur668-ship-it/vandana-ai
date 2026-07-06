async function sendMessage() {
    let text = input.value;
    if (text.trim() === "") return;

    addMessage(text, "user");
    input.value = "";

    addMessage("Vandana is typing...", "ai");

    let reply = await getAIResponse(text);

    // typing remove
    let typing = document.querySelector(".ai:last-child");
    if (typing) typing.remove();

    addMessage(reply, "ai");

    speak(reply);
}

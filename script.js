async function getAIResponse(message) {
    try {
        const res = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + API_KEY,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{
                        role: "user",
                        parts: [{
                            text: "You are Vandana AI, friendly girlfriend-style assistant. Reply naturally and do not repeat user input.\nUser: " + message
                        }]
                    }]
                })
            }
        );

        const data = await res.json();

        return data.candidates?.[0]?.content?.parts?.[0]?.text
            || "No response from AI";

    } catch (error) {
        return "Error connecting AI";
    }
}
    try {
        const res = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + API_KEY,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{
                        role: "user",
                        parts: [{
                            text: "You are Vandana AI, a sweet friendly girlfriend-style assistant. Never repeat user input. Always reply naturally.\nUser: " + message
                        }]
                    }]
                })
            }
        );

        const data = await res.json();

        return data.candidates?.[0]?.content?.parts?.[0]?.text
            || "Sorry, I didn't understand that.";
    } catch (err) {
        return "Error connecting AI";
    }
}

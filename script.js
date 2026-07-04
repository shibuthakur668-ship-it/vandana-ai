function askAI() {
  let input = document.getElementById("question").value;
  let answer = document.getElementById("answer");

  if (input.trim() === "") {
    answer.innerHTML = "⚠️ Pehle koi sawal likhiye.";
    return;
  }

  answer.innerHTML = "🤖 Vandana soch rahi hai...";

  setTimeout(() => {
    answer.innerHTML =
      "💜 Hello Shibu! Abhi ye basic version hai. Agle step me main Gemini AI se connect hokar asli jawab dungi.";
  }, 1000);
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer-input").value.trim();
    let correctAnswer = questions[currentQuestion].a;
    let feedback = document.getElementById("feedback");

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            document.getElementById("game-container").innerHTML = "<h2 class='correct'>تهانينا! لقد ربحت 🎉</h2>";
        }
    } else {
        feedback.textContent = "إجابة خاطئة! حاول مرة أخرى.";
        feedback.className = "wrong";
    }
}

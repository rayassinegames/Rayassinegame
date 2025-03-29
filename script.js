const questions = [
    { q: "شيء كلما أخذت منه زاد، ما هو؟", a: "الحفرة" },
    { q: "شيء يوجد في السماء، وإذا أضفت إليه حرفًا أصبح في الأرض، ما هو؟", a: "نجم" },
    { q: "شيء تملكه ولكن يستخدمه الآخرون أكثر منك، ما هو؟", a: "اسمك" },
    { q: "ما هو الشيء الذي يكون أخضر في الأرض، وأسود في السوق، وأحمر في البيت؟", a: "الشاي" },
    { q: "رجل خرج تحت المطر بدون مظلة أو قبعة ولم يبتل شعره، لماذا؟", a: "لأنه أصلع" },
    { q: "شيء يمكن كسره دون لمسه، ما هو؟", a: "الوعد" },
    { q: "كلمة تتكون من أربع حروف، إذا حذفت منها حرفًا أصبحت ضدها، ما هي؟", a: "بيت" },
    { q: "شيء له يد ولكن لا يستطيع التصفيق، ما هو؟", a: "الساعة" },
    { q: "ما هو الشيء الذي يمشي بلا أرجل ويبكي بلا عيون؟", a: "السحابة" },
    { q: "لديك 3 تفاحات، أخذت منها 2، كم تبقى لديك؟", a: "2" },
    { q: "ما هو الشيء الذي يقرصك دون أن تراه؟", a: "الجوع" },
    { q: "شيء يوصلك من مكان لآخر ولكنه لا يتحرك، ما هو؟", a: "الطريق" },
    { q: "يوجد في القرن مرة، وفي الدقيقة مرتين، ولا يوجد في الساعة، ما هو؟", a: "حرف القاف" },
    { q: "شيء لديه أسنان ولكن لا يعض، ما هو؟", a: "المشط" },
    { q: "بيت ليس له أبواب ولا نوافذ، ما هو؟", a: "البيضة" },
    { q: "شيء كلما زاد نقص، ما هو؟", a: "العمر" },
    { q: "ما هو الرقم الذي يقبل القسمة على كل من 1 و 2 و 3 و 4 و 5 و 6 بدون باقي؟", a: "60" },
    { q: "ما هو السؤال الذي تختلف إجابته دائمًا؟", a: "كم الساعة الآن؟" },
    { q: "إذا كان لديك 5 تفاحات وأخذت 3، كم بقي معك؟", a: "3" },
    { q: "شيء يمكنك رؤيته في الليل 3 مرات وفي النهار مرة واحدة، ما هو؟", a: "حرف ل" }
];

let currentQuestion = 0;

function loadQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("question-text").textContent = questions[currentQuestion].q;
        document.getElementById("answer-input").value = "";
        document.getElementById("feedback").textContent = "";
    } else {
        document.getElementById("game-container").innerHTML = "<h2 class='correct'>تهانينا! لقد أجبت على جميع الأسئلة بنجاح!</h2>";
    }
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer-input").value.trim();
    let correctAnswer = questions[currentQuestion].a;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        currentQuestion++;
        loadQuestion();
    } else {
        document.getElementById("feedback").textContent = "إجابة خاطئة! حاول مرة أخرى.";
        document.getElementById("feedback").className = "wrong";
    }
}

window.onload = loadQuestion;

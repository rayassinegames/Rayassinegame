const crosswordData = [
    { word: "قمر", row: 0, col: 0, direction: "across", clue: "جسم مضيء في السماء ليلاً" },
    { word: "شمس", row: 1, col: 0, direction: "across", clue: "النجم الذي يمدنا بالضوء والحرارة" },
    { word: "ماء", row: 2, col: 1, direction: "down", clue: "السائل الضروري للحياة" }
];

const gridSize = 5;
const table = document.getElementById("crossword");
const acrossClues = document.getElementById("across-clues");
const downClues = document.getElementById("down-clues");

// إنشاء الجدول
for (let i = 0; i < gridSize; i++) {
    let row = table.insertRow();
    for (let j = 0; j < gridSize; j++) {
        let cell = row.insertCell();
        cell.dataset.row = i;
        cell.dataset.col = j;
    }
}

// إضافة الكلمات إلى الشبكة
crosswordData.forEach((item, index) => {
    let r = item.row;
    let c = item.col;
    for (let i = 0; i < item.word.length; i++) {
        let cell = document.querySelector(`[data-row="${r}"][data-col="${c}"]`);
        if (cell) {
            let input = document.createElement("input");
            input.maxLength = 1;
            cell.appendChild(input);
        }
        item.direction === "across" ? c++ : r++;
    }
    
    let clueItem = document.createElement("li");
    clueItem.textContent = `${index + 1}. ${item.clue}`;
    item.direction === "across" ? acrossClues.appendChild(clueItem) : downClues.appendChild(clueItem);
});

// التحقق من الإجابات
function checkAnswers() {
    let correct = true;
    crosswordData.forEach(item => {
        let r = item.row;
        let c = item.col;
        for (let i = 0; i < item.word.length; i++) {
            let cell = document.querySelector(`[data-row="${r}"][data-col="${c}"]`);
            let input = cell.querySelector("input");
            if (input.value.toUpperCase() !== item.word[i].toUpperCase()) {
                input.style.backgroundColor = "red";
                correct = false;
            } else {
                input.style.backgroundColor = "lightgreen";
            }
            item.direction === "across" ? c++ : r++;
        }
    });

    if (correct) alert("تهانينا! كل الإجابات صحيحة.");
    else alert("حاول مرة أخرى.");
}
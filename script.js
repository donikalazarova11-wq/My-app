async function addPoints() {
    console.log("Бутонът е натиснат!"); 
    
    // Пращаме заявка към сървъра (localhost:3000)
    await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: "Задача от сайта",
            points: 50,
            userId: 1 // Това си ти (Доника)
        })
    });

    updateUI(); // Обновяваме числата на екрана
}

async function updateUI() {
    const response = await fetch('http://localhost:3000/market-value/1');
    const data = await response.json();
    
    // Сменяме текста в HTML-а
    document.getElementById('points-display').innerText = data.points;
    document.getElementById('value-display').innerText = data.marketValue;
}
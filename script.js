async function izpratiDannite() {
    console.log("Бутонът е натиснат!");
    try {
        await fetch('https://my-app-nwwp.onrender.com/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: "Задача", points: 50, userId: 1 })
        });

        // Вземаме данните
        const response = await fetch('https://my-app-nwwp.onrender.com/users');
        const users = await response.json();
        
        console.log("Данни от сървъра:", users); // ТУК ВИЖДАШ СТРУКТУРАТА

        const me = users.find(u => u.id === 1);
        if (me) {
            document.getElementById('points-display').innerText = me.points;
        }
    } catch (e) {
        console.error(e);
    }
}
async function izpratiDannite() {
    console.log("Бутонът е натиснат!");
    try {
        // 1. Изпращаме заявката за добавяне на задача
        await fetch('https://my-app-nwwp.onrender.com/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: "Задача", points: 50, userId: 1 })
        });

        // 2. Взимаме актуалните данни за потребителя
        const response = await fetch('https://my-app-nwwp.onrender.com/users');
        const users = await response.json();
        
        // Намираме нашия потребител с id 1
        const me = users.find(u => u.id === 1);
        
        if (me) {
            // 3. Актуализираме екрана с новите данни
            document.getElementById('points-display').innerText = me.points;
            
            // Ако пазарната стойност се базира на точките, ето как да я сметнем
            const marketValue = me.points * 2; // Пример: 1 точка = 2 долара
            document.getElementById('value-display').innerText = marketValue + '$';
        }
    } catch (error) {
        console.error("Грешка:", error);
    }
}
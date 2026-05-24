async function izpratiDannite() {
    console.log("Бутонът е натиснат!");

    try {
        // 1. Първа заявка (POST)
        const response1 = await fetch('https://my-app-nwwp.onrender.com/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: "Задача от сайта",
                points: 50,
                userId: 1
            })
        });

        // 2. Втора заявка (GET)
        const response2 = await fetch('https://my-app-nwwp.onrender.com/market-value/1');
        const data = await response2.json();
        
        console.log("Отговор от сървъра:", data);
        alert("Успешно! Данните са изпратени.");
    } catch (error) {
        console.error("Грешка при заявката:", error);
    }
}
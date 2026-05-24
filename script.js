 console.log("Бутонът е натиснат!"); 
    
    // Пращаме заявка към сървъра (localhost:3000)
    await fetch('https://my-app-nwwp.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: "Задача от сайта",
            points: 50,
            userId: 1 // Това си ти (Доника)
        })
    });
    const response = await fetch('https://my-app-nwwp.onrender.com/market-value/1');
    const data = await response.json();

}
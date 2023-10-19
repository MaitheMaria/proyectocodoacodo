document.getElementById('search').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'ab383488f1ea3eccc0d2abe0a2cd28f7'; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const resultElement = document.getElementById('result');
        resultElement.style.opacity = '1';
        resultElement.style.transform = 'translateX(0)';


        
        if (data.main && data.main.temp) {
            const temperature = Math.round(data.main.temp - 273.15);
            resultElement.innerHTML = `La temperatura en ${data.name} es de ${temperature}°C.`;
        } else {
            console.error('Error: No se pudo obtener la temperatura.');
        }
    })
    .catch(error => console.error('Error:', error));
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
   event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    
});

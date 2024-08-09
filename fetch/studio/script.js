//TODO: Add Your Code Below
window.addEventListener('load', function() {
    // Fetch data from the API
    fetch('https://handlers.education.launchcode.org/static/astronauts.json') 
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('container');
            data.forEach(astronaut => {
                // Create astronaut div
                const astronautDiv = document.createElement('div');
                astronautDiv.classList.add('astronaut');

                // Create and append astronaut details
                astronautDiv.innerHTML = `
                    <img src="${astronaut.picture}" class="avatar" alt="Astronaut Avatar">
                    <div>
                        <h2>${astronaut.firstName} ${astronaut.lastName}</h2>
                        <p>Hours in space: ${astronaut.hoursInSpace}</p>
                        <p>Active: ${astronaut.active ? 'Yes' : 'No'}</p>
                        <p>Skills: ${astronaut.skills.join(', ')}</p>
                    </div>
                `;
                container.appendChild(astronautDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
function showProjectDetails(project) {
    const description = document.getElementById('project_description');

    if (project === 'weather-app') {
        description.innerHTML = `
            <h2>Project Description</h2>
            <h3>Weather App</h3>
            <p>This is a simple weather app I built that lets users check real-time weather by entering a city name. It connects to a public weather API and shows details like temperature, conditions, and more in a clear, easy-to-read format.</p>
            <p>I made sure to keep the design clean and user-friendly, so you can quickly get the weather info you need without any clutter.</p>
            <a href="https://github.com/rf23aam/weather-app" target="_blank">View Project on GitHub</a>
        `;
    } else if (project === 'BMI-Calculator') {
        description.innerHTML = `
            <h2>Project Description</h2>
            <h3>BMI & Water Tracking Project</h3>
            <p>This is a simple and practical tool I built to help users calculate their Body Mass Index (BMI) and get daily water intake recommendations.</p>
            <p>The BMI calculator takes your height and weight and gives you your BMI value, along with a category like “Normal weight” or “Overweight,” with visual feedback to make it easy to understand.</p>
            <p>The water intake tracker uses your weight and activity level to estimate how much water you should drink daily, providing a straightforward, helpful guide. I really enjoyed making this because it combines useful health features with a clean, interactive design.</p>
            <a href="https://github.com/rf23aam/BMI-Calculator" target="_blank">View Project on GitHub</a>
        `;
    }
}
